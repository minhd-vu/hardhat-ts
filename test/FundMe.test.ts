/* eslint-disable no-unused-vars */
import { ethers } from "hardhat";
import { FundMe } from "../typechain";

describe("FundMe", function () {
  let fundMe: FundMe;

  beforeEach(async () => {
    fundMe = await ethers.getContract("FundMe");
  });

  describe("constructor", function () {
    console.log("Hello");
  });
});
