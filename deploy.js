const BagelChamp = artifacts.require("BagelChamp");

module.exports = function (deployer) {
  deployer.deploy(BagelChamp, ["Plain Bagel", "Everything Bagel", "Blueberry Bagel"]);
};
