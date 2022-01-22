const { Contract } = require("ethers");
const { ethers, upgrades } = require("hardhat");
console.clear();
async function main() {
  const boxContract = await ethers.getContractFactory("Box");
  console.log("Deploying upgradeable box..");
  /*
    Check the deploy proxy docs at https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#deploy-proxy
    The function returns a proxy instance. A middle contract b/w user and implmentation(Box)
    Arguments are
        1. A ethers contractFactory instance (the implementation)
        2. An [args] array. Arguments list for initializer
        3. An options object of type
            1. initializer: string | false, // The function in our implementation to call after deployment. The args for the call will be the aboce [args] array
            2. unsafeAllow: ValidationError[], // Allow these validation errors, check docs
            3. kind: 'uups' | 'transparent', // The kind of Proxy

            ---And many options exist in the options object. See here https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#common-options
            A useful one used here is 'constructorArgs'
    */
  const boxInstance = await upgrades.deployProxy(boxContract, [557], {
    initializer: "_initialiser",
  });
  await boxInstance.deployed();
  console.log("Box deployed to: ", boxInstance.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
