require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/h1vt0uqg_BT532X1V6uji18WQNvUrJNO',
      accounts: [
        'cf7ea1076d1791009eb3e79e9a74aa27c671c86d365a98ebfa7f2b2ae288925b'
      ]
    }
  }
};
