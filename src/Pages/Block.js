import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';
import { getProvider } from '../misc/ethTasks';

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
  console.log(blockDetails);

  return (
    <div>
      <NetworkInfo network={network} />
      
      <section className="blk-section">
        <div className="blk-id">
          <div className="blk-num">
            {number}
          </div>
          <div className="blk-hash">

          </div>
        </div>
        <div className="blk-txns">
          
        </div>
      </section>
    </div>
  )
}

export default Block