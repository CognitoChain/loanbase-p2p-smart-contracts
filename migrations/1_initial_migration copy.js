var Migrations = artifacts.require("./TokenRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
