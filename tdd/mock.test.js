const { githubSorter } = require("./mock");


// Uncomment this, and fix the TODO part:

// global.fetch = jest.fn(() =>
//  Promise.resolve({
//    json: () => Promise.resolve({ ... TODO ... }),
//  })
// );

describe("mock githubSorter", () => {

  it("first row's element is greater than the second's", async () => {
    const result = await githubSorter();
    expect(result[0].forks_count).toBeGreaterThanOrEqual(result[1].forks_count);
  });
});
