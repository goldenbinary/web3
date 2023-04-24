const BagelChamp = artifacts.require("BagelChamp");

module.exports = function (deployer) {
  deployer.deploy(BagelChamp, ["Plain", "Everything", "Cinnamon Raisin","Jalepeno Anchovy"]);
};
