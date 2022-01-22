const { ethers } = require("hardhat");

async function main() {
  // Our code will go here
  const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const Box = await ethers.getContractFactory("Box");
  const box = Box.attach(address);
  const value = await box.retrieve();
  console.log("Value is ", value.toString());
  await box.store(123123);
  const newValue = await box.retrieve();
  console.log("New value is ", newValue.toString());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
