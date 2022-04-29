import NetworkInfo from "../components/NetworkInfo";
import { useParams } from "react-router-dom";
// import { getExchangeRate } from "../misc/miniTask";

const Token = () => {
    const { network, hash } = useParams();
    
    return (
        <div>
            <NetworkInfo network={network} />
            Token
            {hash}
        </div>
    )
}

export default Token