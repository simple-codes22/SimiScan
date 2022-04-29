import { useParams } from "react-router-dom"
import LatestBlocks from "../components/LatestBlocks";
import LatestTransactions from "../components/LatestTransactions";
import '../CSS/MainStyle.css';
import NetworkInfo from "../components/NetworkInfo";
import Search from "../components/Search";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Main = () => {
  const { network } = useParams();
  // const [getNetworks, ] = useState(['mainnet', 'kovan', 'rinkeby', 'ropsten', 'goerli'])
  // const navigate = useNavigate()


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