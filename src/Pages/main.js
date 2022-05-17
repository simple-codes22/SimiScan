import { useNavigate, useParams } from "react-router-dom"
import LatestBlocks from "../components/LatestBlocks";
import LatestTransactions from "../components/LatestTransactions";
import '../CSS/MainStyle.css';
import NetworkInfo from "../components/NetworkInfo";
import Search from "../components/Search";
import { useEffect } from "react";


const Main = () => {
  const { network } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(network !== 'mainnet' && network !== 'rinkeby' && network !== 'ropsten' && network !== 'goerli' && network !== 'kovan') {
      return navigate(`/${network}/not-found`);
    }
  }, [network, navigate])

  return (
    <main>
      <NetworkInfo network={network} />
      <Search ethNetwork={network} />
      <div className="latest-section">
        <LatestTransactions ethNetwork={network} />
        <LatestBlocks ethNetwork={network} />
    </div>
  </main>
  )
}

export default Main