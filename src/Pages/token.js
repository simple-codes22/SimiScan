import NetworkInfo from "../components/NetworkInfo";
import { useParams } from "react-router-dom";


const Token = () => {
    const { network, hash } = useParams();
    
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