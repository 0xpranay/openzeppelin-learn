const { ethers, upgrades } = require("hardhat");
async function main() {
  console.clear();
  const BoxV2 = await ethers.getContractFactory("Box");
  console.log("Upgrading Box..");
  await upgrades.upgradeProxy(
    "0x2E2Ed0Cfd3AD2f1d34481277b3204d807Ca2F8c2",
    BoxV2
  );
  console.log("Box upgraded");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
