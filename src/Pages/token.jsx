import NetworkInfo from "../components/NetworkInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProvider } from "../misc/ethTasks";
import { Ellipsize10x } from "../misc/miniTask";
import { ethers } from "ethers";
import Spinner from '../misc/spinner';
import { ToggleCopy } from '../misc/copy';
import '../CSS/token-page.css';


const Token = () => {
    const { network, hash } = useParams();

    const [tokenDetails, setTokenDetails] = useState(null)

    useEffect(() => {
        const getTokenDetails = async () => {

            const abi = [
                "function name() public view returns (string)",
                "function decimals() view returns (uint)",
                "function symbol() view returns (string)",
            ];
            const provider = getProvider(network)

            const contract = new ethers.Contract(hash, abi, provider);
            console.log(contract)

            const name = await contract.name()
            const symbol = await contract.symbol()
            const decimals = await contract.decimals()

            return setTokenDetails({
                name: name,
                symbol: symbol,
                decimals: decimals,
            })
        }
        getTokenDetails()
    }, [network, hash]);

    return (
        <div>
            <NetworkInfo network={network} />
            <section className='token-section'>
                {tokenDetails !== null ?
                    <>
                        <div className="token-id">
                            <div className='token-topic'>Token</div>
                            <div className='token-hash'>
                                {hash} <ToggleCopy number='one' />
                            </div>
                        </div>
                        <div className="token-overview">
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            Overview
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Token Name:
                                        </td>
                                        <td>
                                            {tokenDetails.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Symbol:
                                        </td>
                                        <td>
                                            {tokenDetails.symbol}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Decimals:
                                        </td>
                                        <td>
                                            {tokenDetails.decimals.toNumber()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Contract address:
                                        </td>
                                        <td>
                                            {Ellipsize10x(hash)} <ToggleCopy number='two' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </> :
                    <Spinner />
                }
            </section>
        </div>
    )
}

export default Token