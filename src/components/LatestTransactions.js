import { useEffect, useState } from "react";
import { getProvider } from "../misc/ethTasks";
import Spinner from '../misc/spinner';

const LatestTransactions = ({ ethNetwork }) => {
  
  const [getTransactions, setTransactions] = useState(['a'])

  useEffect(() => {
    
    const getLatestTransaction = async () => {
      /* This function returns the lates transactions done within the latest block */

      const provider = getProvider(ethNetwork);
  
      const blockNumber = await provider.getBlockNumber();
      const transactions = await provider.getBlockWithTransactions(blockNumber);
      setTransactions(transactions)
    }
  
    // getLatestTransaction();
  
  }, [ethNetwork])

  // console.log(getTransactions)

  return (
    <section className='latest transactions'>
      <div className="title">Latest Transactions</div>
      {getTransactions.length === 0 ? <Spinner /> : 
        <div className='list'>
          {/* {getTransactions} */}
          Hello
        </div>
      }
    </section>
  )
}

export default LatestTransactions