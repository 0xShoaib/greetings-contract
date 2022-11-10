// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so greetingContract here is a factory for instances of our Greeting contract.
  */
  const greetingContract = await ethers.getContractFactory("Greetings");

  // here we deploy the contract
  const deployedGreetingContract = await greetingContract.deploy("Shoaib");

  // wait for the contract to deploy
  await deployedGreetingContract.deployed();

  // print the address of the deployed contract
  console.log("Greeting Contract Address:", deployedGreetingContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
