const { expect } = require("chai");
const { ethers } = require("hardhat");
console.clear();
describe("Box", async function () {
  it("Contract should return correct value after change", async function () {
    const boxContract = await ethers.getContractFactory("Box");
    // const boxInstance = await boxContract.deploy(); Uncomment if not deployed
    // await boxInstance.deployed();  Uncomment if not deployed
    const boxInstance = boxContract.attach(
      "0x4c5859f0F772848b2D91F1D83E2Fe57935348029"
    );
    const txn = await boxInstance.store(42);
    await txn.wait();
    const result = await boxInstance.retrieve();
    expect(result).to.equal(42);
    const changeTx = await boxInstance.store(557);
    await changeTx.wait();

    expect(await boxInstance.retrieve()).to.equal(557);
  });

  it("Calling willRevert should revert", async function () {
    const boxContract = await ethers.getContractFactory("Box");
    const boxInstance = boxContract.attach(
      "0x4c5859f0F772848b2D91F1D83E2Fe57935348029"
    );
    await expect(boxInstance.willRevert()).to.be.revertedWith("Reverted");
  });

  it("Will revert if the balance of user is low", async function () {
    const boxContract = await ethers.getContractFactory("Box");
    const boxInstance = boxContract.attach(
      "0x4c5859f0F772848b2D91F1D83E2Fe57935348029"
    );
    await expect(
      boxInstance.transfer("0x0000000000000000000000000000000000000000", 200)
    ).to.be.revertedWith("Balance not enough");
  });
});
