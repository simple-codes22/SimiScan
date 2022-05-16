import NetworkInfo from "../components/NetworkInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProvider } from "../misc/ethTasks";
import { ethers } from "ethers";


const Token = () => {
    const { network, hash } = useParams();

    const [tokenDetails, setTokenDetails] = useState()
    
    useEffect(() => {
        const getTokenDetails = async () => {
            
            const abi = [
                "function name() public view returns (string)",
                "function decimals() view returns (uint)",
                "function symbol() view returns (string)",
                "function totalSupply() view returns (uint256)",
            ];
            const provider = getProvider(network)

            const contract = new ethers.Contract(hash, abi, provider);
            console.log(contract)
            
            const name = await  contract.name()
            const symbol = await  contract.symbol()
            const decimals = await  contract.decimals()
            const totalSupply = await  contract.totalSupply()

            return setTokenDetails({
                name: name,
                symbol: symbol, 
                decimals: decimals,
                totalSupply: totalSupply
            })
        }
        getTokenDetails()
    }, [network, hash]);
    console.log(tokenDetails)
    
    return (
        <div>
            <NetworkInfo network={network} />
            <section className='token-section'>
                <div className="token-id">
                    <div className="token-name">
                        {/* Token Name */}
                    </div>
                    <div className="token-symbol">
                        {/* Token symbol */}
                    </div>
                </div>
                <div className="token-overview">
                    <div className="token-price"></div>
                    <div className="token-decimal"></div>
                    <div className="total-supply"></div>
                </div>
            </section>
        </div>
    )
}

export default Token