require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-ganache");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const { PRIVATE_KEY, PRIVATE_KEY_2ndAcc, API_URL_BSC, PRIVATE_KEY_polygon, YOUR_ETHERSCAN_API_KEY, PRIVATE_KEY_l, API_URL_ropsten, API_URL_rinkeby, API_URL_local, API_URL_mumbai } = process.env;


//sample from internet
/**
module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    mychain: {
      url: 'http://172.23.23.23:8600',
      gasPrice: 1500000000,
      chainId: 67,
      gas: 4100000,
      accounts: [
        '0x37ffa6xxxxx1'，
        '0x37ffa6xxxxx2'，
        '0x37ffa6xxxxx3',
        '0x37ffa6xxxxx4'
      ],
    },
  },
};
*/
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    }
  },
  paths:{
    artifacts: './src/artifacts',
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: YOUR_ETHERSCAN_API_KEY
  },
  networks: {
    rinkeby: {
      url: API_URL_rinkeby,
      gasPrice: 1500000000,
      // gas: 3000035556900,
      accounts: [`0x${PRIVATE_KEY}`, `0x${PRIVATE_KEY_2ndAcc}`]
    },
    ropsten: {
      url: API_URL_ropsten,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    bsc: {
      url: API_URL_BSC,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mumbai: {
      url: API_URL_mumbai,
      accounts: [`0x${PRIVATE_KEY_polygon}`]
    }
  }
};
