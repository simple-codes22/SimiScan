import { useEffect, useState } from "react";
import { getProvider, convertToEther } from "../misc/ethTasks";
import { EllipsizeTx, getCurrentEpoch, getTimeHistory, reduceEthSize } from "../misc/miniTask";
import { Link } from "react-router-dom";
import Spinner from '../misc/spinner';
import '../CSS/Transaction.css';

const LatestTransactions = ({ ethNetwork }) => {
  
  const [getTransactions, setTransactions] = useState([])

  useEffect(() => {
    
    const getLatestTransaction = async () => {
      /* This function returns the lates transactions done within the latest block */

      const provider = getProvider(ethNetwork);
  
      const blockNumber = await provider.getBlockNumber();
      const transactions = await provider.getBlockWithTransactions(blockNumber);
      setTransactions(transactions)
    }
  
    getLatestTransaction();
  
  }, [ethNetwork])

  return (
    <section className='latest transactions'>
      <div className="title">Latest Transactions 🤝💸</div>
      {getTransactions.length === 0 ? <Spinner /> : 
        <div className='list'>
          {getTransactions.transactions.length < 25 ? getTransactions.transactions.map(tx => {
            return (
              <>
                <div className='tx-individ' key={getTransactions.transactions.indexOf(tx)}>
                  <div className='tx-block'>
                    <div className="tx-hash" title={`Hash: ${tx.hash}`}>
                      {EllipsizeTx(tx.hash)}
                    </div>
                    <div className="tx-time">
                      {getTimeHistory(getCurrentEpoch() - getTransactions.timestamp)}
                    </div>
                  </div>
                  <div className="tx-main">
                    <div className="tx-from">From <Link className='tx-link' to='#'>{tx.from}</Link></div>
                    <div className="tx-to">To <Link className='tx-link' to='#'>{tx.to}</Link></div>
                  </div>
                  <div className='tx-value'>
                    {/* Money amount transferred */}
                    {convertToEther(tx.value)} Eth transferred 💸💸
                  </div>
                </div>
                <div className='line'></div>
              </>
            )
          }) :
          getTransactions.transactions.slice(0, 25).map(tx => {
            return (
              <>
                <div className='tx-individ' key={getTransactions.transactions.indexOf(tx)}>
                  <div className='tx-block'>
                    <div className="tx-hash" title={`Hash: ${tx.hash}`}>
                      {EllipsizeTx(tx.hash)}
                    </div>
                    <div className="tx-time">
                      {getTimeHistory(getCurrentEpoch() - getTransactions.timestamp)}
                    </div>
                  </div>
                  <div className="tx-main">
                    <div className="tx-from">From <Link className='tx-link' to='#'>{tx.from}</Link></div>
                    <div className="tx-to">To <Link className='tx-link' to='#'>{tx.to}</Link></div>
                  </div>
                  <div className='tx-value'>
                    {/* Money amount transferred */}
                    {reduceEthSize(convertToEther(tx.value))} Eth transferred 💸💸
                  </div>
                </div>
                <div className='line'></div>
              </>
            )
          })
        }
        </div>
      }
    </section>
  )
}

export default LatestTransactions