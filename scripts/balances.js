const { ethers } = require("hardhat");

async function main() {
  console.log("Current balances are..");
  const localnet = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const accounts = await localnet.listAccounts();
  for (let i = 0; i < accounts.length; i++) {
    const balance = await localnet.getBalance(accounts[i]);
    process.stdout.write(accounts[i] + " ");
    process.stdout.write(ethers.utils.formatEther(balance));
    console.log("");
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    exit(0);
  });
