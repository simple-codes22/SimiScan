import { useParams } from "react-router-dom"
import LatestBlocks from "../components/LatestBlocks";
import LatestTransactions from "../components/LatestTransactions";
// import { useState } from "react"
import { Capitalize } from "../misc/miniTask";
import '../CSS/MainStyle.css';

const Main = () => {
  const { network } = useParams();

  return (
    <main>
      <div className='network-info'>
        {network !== 'mainnet' ? `Running On The ${Capitalize(network)} Test Network ⚡⚡` : "Running On The Ethereum Mainnet ⚡⚡"}
      </div>
      <div className='tx-search'>
        <input type="text" className='search-input' placeholder="Search by Address / Txn Hash / Block / Token" />
        <button className='search-btn'>
          Search
        </button>
      </div>
      <div className="latest-section">
          <LatestTransactions ethNetwork={network} />
          <LatestBlocks ethNetwork={network} />
      </div>
    </main>
  )
}

export default Main