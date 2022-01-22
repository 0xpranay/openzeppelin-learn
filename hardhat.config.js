/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { alchemyApi, mnemonic } = require("./secrets.json");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: alchemyApi,
      accounts: [
        "ccc84a4440dee12a261cffae6d9089badf4a8b8b4b57dbd16f55faac0b28f2f7",
      ],
    },
  },
};
