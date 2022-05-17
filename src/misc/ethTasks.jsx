import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const getProvider = (ethNetwork) => {
    /* This function instantiates the JSON RPC provider */
    // Using infura.io as the main provider
    return new ethers.providers.JsonRpcProvider(
        `https://${ethNetwork}.infura.io/v3/${process.env.REACT_APP_PRIVATE_KEY}`
    );
};

export const convertToEther = (bigNumber_) => {
    /* This function converts a bigNumber format of a wei value to Ether */
    return ethers.utils.formatEther(bigNumber_);
};
export const convertToGwei = (bigNumber_) => {
    /* This function converts a bigNumber format of a wei value to Gwei */
    return ethers.utils.formatUnits(bigNumber_, "gwei");
};

export const ExchangeRate = ({ price }) => {
    // This is a React Hook unlike other functions in this script

    const [getER, setER] = useState();
    useEffect(() => {
        const getExchangeRate = async () => {
            const response = await fetch(
                `https://rest.coinapi.io/v1/exchangerate/ETH/USD`,
                {
                    method: "GET",
                    headers: {
                        "X-CoinAPI-Key": process.env.REACT_APP_EXCHANGE_RATE_KEY,
                    },
                }
            );
            const resJsonFormat = await response.json();
            return setER(resJsonFormat.rate)
        };
        
        getExchangeRate();
    }, []);

    return (
        <>
            {typeof getER === 'number' ? <>{` ($${(parseFloat(price) * getER).toFixed(2)})`}</> : <></>}
        </>
    );
};
