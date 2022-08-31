require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/BJYzuioRBLjQAhuoirEl9pKQlZkwECsq",
       accounts: ["0fe57bb9c2f794bd5f3a31359f3af4f247ede7944ebca62601bb5c8c64f67321"]
    }
  }

};
