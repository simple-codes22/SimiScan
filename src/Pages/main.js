import { useParams } from "react-router-dom"
import LatestBlocks from "../components/LatestBlocks";
import LatestTransactions from "../components/LatestTransactions";
// import { useState } from "react"
import '../CSS/MainStyle.css';
import NetworkInfo from "../components/NetworkInfo";
import Search from "../components/Search";

const Main = () => {
  const { network } = useParams();

  return (
    <main>
      <NetworkInfo network={network} />
      <Search />
      <div className="latest-section">
          <LatestTransactions ethNetwork={network} />
          <LatestBlocks ethNetwork={network} />
      </div>
    </main>
  )
}

export default Main