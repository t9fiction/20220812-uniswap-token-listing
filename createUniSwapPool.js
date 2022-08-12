const { ethers } = require('ethers');
const axios = require('axios')
require('dotenv').config();

const { PRIVATE_KEY, PRIVATE_KEY_2ndAcc, YOUR_ETHERSCAN_API_KEY, API_URL_ropsten, API_URL_rinkeby } = process.env;

const UNISWAP_V3_FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

const provider = new ethers.providers.JsonRpcProvider(API_URL_ropsten)
const signer = new ethers.Wallet(PRIVATE_KEY)
const connected_account = signer.connect(provider)
const WALLET_ADDRESS = signer.address;

console.log(connected_account)

const main = async () => {
    
    //Setup the V3 Factory

    //To get the api automatically
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${UNISWAP_V3_FACTORY_ADDRESS}&apikey=${apiKey}`
    const res = await axios.get(url);

    const abi = JSON.parse(res.data.result)

    const factoryContract = new ethers.Contract(
        UNISWAP_V3_FACTORY_ADDRESS,
        abi,
        connected_account
    )

    //Creating the Pool
    const tx = 

}

main()