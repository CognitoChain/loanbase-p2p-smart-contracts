const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey ="0c4614c66b244dc9a975984b0cf0934a"
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

const path = require("path");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    },
    kovan:
    {
      provider: ()=> new HDWalletProvider(mnemonic,'https://rinkeby.infura.io/v3/7cd4731a3be74a6ab7c32fe799ab3177'),
      network_id:4,
      gasPrice: 20000000000, // 20 GWEI
      gas: 3716887,
      confirmations:2,
      timeoutBlocks:200,
      skipDryRun:true
    }
  }
};
