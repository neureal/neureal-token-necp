var NECPToken = artifacts.require("./NECPToken.sol");

module.exports = function(deployer) {
  deployer.deploy(NECPToken);
};
