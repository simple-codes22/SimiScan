import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';
import { convertToGwei, getProvider } from '../misc/ethTasks';
import { Ellipsize10x } from '../misc/miniTask';
import { ToggleCopy } from '../misc/copy';
import Spinner from '../misc/spinner';
import '../CSS/blocks-page.css';

const Block = () => {
  const { network, number } = useParams();

  const [blockDetails, setBlockDetails] = useState(null)

  useEffect(() => {
    const getBlockDetails = async () => {
      const provider = getProvider(network);
      const block = await provider.getBlock(parseInt(number));
      return setBlockDetails(block);
    }
    getBlockDetails();

  }, [network, number])

  return (
    <div>
      <NetworkInfo network={network} />
      
      <section className="blk-section">
        <div className="blk-id">
          <div className="blk-title">
            Block
          </div>
          <div className="blk-num" title={number}>
            {number} <ToggleCopy number='one' />
          </div>
        </div>
        {blockDetails !== null ? 
        <>
        <div className='blk-overview'>
        <table className='blk-overview-table'>
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
                  Block hash:
                </td>
                <td>
                  {Ellipsize10x(blockDetails.hash)} <ToggleCopy number="two" />
                </td>
              </tr>
              <tr>
                <td>
                  Miner:
                </td>
                <td>
                  {Ellipsize10x(blockDetails.miner)} <ToggleCopy number="three" />
                </td>
              </tr>
              <tr>
                <td>
                  Nonce:
                </td>
                <td>
                  {blockDetails.nonce} <ToggleCopy number="four" />
                </td>
              </tr>
              <tr>
                <td>
                  Gas limit:
                </td>
                <td>
                  {convertToGwei(blockDetails.gasLimit)} Gwei
                </td>
              </tr>
              <tr>
                <td>
                  Transactions completed:
                </td>
                <td>
                  {blockDetails.transactions.length === 0 ?
                    <>No transaction completed</> :
                    <>
                      {blockDetails.transactions.length === 1 ?
                        <>
                          1 transaction completed
                        </> :
                        <>
                          {blockDetails.transactions.length} transactions completed
                        </>
                      }
                    </>
                  }
                </td>
              </tr>
            </tbody>
        </table>
        </div>
        <div className="blk-recent-tx">
          <div className="blk-recent-tx-title">
            Recent Transactions From Block 💸💸
          </div>
          {blockDetails !== null ? 
          <>
            {blockDetails.transactions.length < 30 ? 
              blockDetails.transactions.map(tx => {
                return (
                  <div className='blk-individ-tx' key={tx}>
                    <div className="blk-individ-tx-main">
                      {Ellipsize10x(tx)} <ToggleCopy />
                    </div>
                    <div className='blk-individ-tx-link'>
                      <Link className='blk-link-main' to={`/${network}/txn/${tx}`}>View transaction details 👆👆</Link>
                    </div>
                  </div>
                )
              })
            : 
              blockDetails.transactions.slice(0, 35).map(tx => {
                return(
                  <div className='blk-individ-tx' key={tx}>
                    <div className="blk-individ-tx-main">
                      {Ellipsize10x(tx)} <ToggleCopy />
                    </div>
                    <div className='blk-individ-tx-link'>
                      <Link className='blk-link-main' to={`/${network}/txn/${tx}`}>View transaction details 👆👆</Link>
                    </div>
                  </div>
                )
              })
            }
          </> : 
          <></>}
          </div>
        </> : 
        <Spinner /> }
      </section>
    </div>
    
  )
}

export default Block