import { ethers } from 'ethers';

export const getProvider = (ethNetwork) => {
    /* This function instantiates the JSON RPC provider */
    // Using infura.io as the main provider
    return new ethers.providers.JsonRpcProvider(`https://${ethNetwork}.infura.io/v3/${process.env.REACT_APP_PRIVATE_KEY}`);
}

export const convertToEther = (bigNumber_) => {
    /* This function converts a bigNumber format to Ether */
    return ethers.utils.formatEther(bigNumber_);
}