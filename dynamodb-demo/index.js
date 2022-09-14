/* eslint-disable no-unused-vars */

const { v4: uuidv4 } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  GetCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const REGION = "eu-north-1";
const ddbClient = new DynamoDBClient({ region: REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const getAllItems = async () => {
  const params = {
    TableName: "andy-demo",
  };
  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items;
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const getItem = async (id) => {
  const params = {
    TableName: "andy-demo",
    Key: { id },
  };
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    return data.Item;
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const putItem = async (item) => {
  const params = {
    TableName: "andy-demo",
    Item: item,
  };
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    // console.log("Success - putItem", data);
    return;
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const updateItem = async (item) => {
  const params = {
    TableName: "andy-demo",
    Key: { id: item.id },
    UpdateExpression: "set firstName = :firstName, lastName = :lastName",
    ExpressionAttributeValues: {
      ":firstName": item.firstName,
      ":lastName": item.lastName,
    },
  };
  try {
    const data = await ddbDocClient.send(new UpdateCommand(params));
    // console.log("Success - updateItem", data);
    return;
  } catch (err) {
    console.log("Error", err.stack);
  }
};

const deleteItem = async (id) => {
  const params = {
    TableName: "andy-demo",
    Key: { id },
  };
  try {
    const data = await ddbDocClient.send(new DeleteCommand(params));
    // console.log("Success - deleteItem", data);
    return;
  } catch (err) {
    console.log("Error", err.stack);
  }
};

async function main() {
  console.log(await getAllItems());
  // console.log(await getItem('0869cb1e-44dd-4456-9fc8-c62b7907585a'));
  // await putItem({ id: uuidv4(), firstName: 'Andreas', lastName: 'Lindroos', middleName: 'Johan', age: 35, born: 1987});
  // await updateItem({ id: "8f370b39-99b5-407b-8fe6-73339d5cb86d", firstName: 'Matti', lastName: 'Meikäläinen'});
  // await deleteItem("59e753e2-d8cd-415b-8020-bd2cc08965c5");

  // GET /api/person
  // POST /api/person
  // GET /api/person/:id
  // PUT /api/person/:id
  // DELETE /api/person/:id

  // await putItem({
  //   id: uuidv4(),
  //   firstName: "Andreas",
  //   lastName: "Lindroos",
  //   middleName: "Johan",
  //   age: 35,
  //   born: 1987,
  //   certificates: [
  //     { "name": "Scrum", completitionDate: '2020-10-11' },
  //     { "name": "GCP", completitionDate: '2020-10-11' },
  //     { "name": "AWS", completitionDate: '2020-10-11' }
  //   ]
  // });
}

main();
