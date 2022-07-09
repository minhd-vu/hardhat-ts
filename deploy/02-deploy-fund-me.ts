import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const FundMe = await ethers.getContractFactory("FundMe");
  const fundMe = await FundMe.deploy();

  await fundMe.deployed();

  console.log("FundMe deployed to:", fundMe.address);
};
export default func;
