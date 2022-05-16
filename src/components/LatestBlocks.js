import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProvider } from '../misc/ethTasks';
import Spinner from '../misc/spinner';
import { Ellipsize } from '../misc/miniTask';
import '../CSS/Latest.css';
import '../CSS/Block.css';


const LatestBlocks = ({ ethNetwork }) => {
  /* This component gets the most recent blocks of transactions made on the blockchain */
  
  const [getBlocks, setBlocks] = useState([]);
  
  useEffect(() => {

    const getLatestBlocks = async () => {
      /* This function gets the latest 10 blocks of transactions */
  
      const provider = getProvider(ethNetwork)
      const blockNumber = await provider.getBlockNumber();

      setBlocks([
        await provider.getBlock(blockNumber),
        await provider.getBlock(blockNumber-1),
        await provider.getBlock(blockNumber-2),
        await provider.getBlock(blockNumber-3),
        await provider.getBlock(blockNumber-4),
        await provider.getBlock(blockNumber-5),
        await provider.getBlock(blockNumber-6),
        await provider.getBlock(blockNumber-7),
        await provider.getBlock(blockNumber-8),
        await provider.getBlock(blockNumber-9),
        await provider.getBlock(blockNumber-10)
      ])
    }

    getLatestBlocks();

  }, [ethNetwork])

  // console.log(getBlocks)

  return (
    <section className='latest blocks'>
      <div className="title">Latest Blocks ⚡⚡</div>
      {getBlocks.length === 0 ? <Spinner /> : 
        <div className='list'>
          {getBlocks.map(block => {
            return (
              <div className='block-individ' key={getBlocks.indexOf(block)}>
                <div className='block-number'>
                  <div className="block-number-main">
                    <Link className='block-link' to={`block/${block.number}`}>{block.number}</Link>
                  </div>
                  <div className="block-hash" title={`Hash: ${block.hash}`}>
                    {Ellipsize(block.hash)}
                  </div>
                </div>
                <div className="block-miner">
                  <div className="block-miner-title">Miner:</div>
                  <div className="block-miner-main">{block.miner}</div>
                </div>
                <div className='block-transactions'>
                  {block.transactions.length === 1 ? <>{block.transactions.length} txn completed 💸💸 </>: <>{block.transactions.length} txns completed 💸💸</>}
                </div>
              </div>
            )
          })}
        </div>
      }
    </section>
  )
}

export default LatestBlocks;