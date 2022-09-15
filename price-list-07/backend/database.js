const { v4: uuidv4 } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  GetCommand,
  UpdateCommand,
  DeleteCommand,
  QueryCommand,
} = require("@aws-sdk/lib-dynamodb");

const REGION = "eu-north-1";
const ddbClient = new DynamoDBClient({ region: REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const databaseConfig = {
  TableName: "fruit-table",
};

async function readFood(id) {
  const params = {
    ...databaseConfig,
    Key: { id },
  };
  const data = await ddbDocClient.send(new GetCommand(params));
  return data.Item;
}

async function readAllFood (type) {
  const params = {
    ...databaseConfig,
    IndexName: 'type-index',
    KeyConditionExpression: "#keyName = :t",
    ExpressionAttributeNames: { "#keyName": "type" },
    ExpressionAttributeValues: {
      ":t": type,
    },
  };
  
  const data = await ddbDocClient.send(new QueryCommand(params));
  return data.Items;
};

async function createFood(item) {
  const params = {
    ...databaseConfig,
    Item: { id: uuidv4(), ...item },
  };
  await ddbDocClient.send(new PutCommand(params));
}

async function updateFood(id, item) {
  const params = {
    ...databaseConfig,
    Key: { id },
    UpdateExpression: "set name = :name, price = :price",
    ExpressionAttributeValues: {
      ":price": item.price,
      ":name": item.name,
    },
  };
  await ddbDocClient.send(new UpdateCommand(params));
}


async function searchFruit(searchText) {}

async function searchVegetables(searchText) {}

module.exports = {
  readAllFood,
  updateFood,
  createFood,
  searchFruit,
  searchVegetables,
  readFood,
};
