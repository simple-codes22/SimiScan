import { useParams } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';

const Block = () => {
  const { network, hash } = useParams();
  console.log(hash)
  return (
    <div>
      <NetworkInfo network={network} />
      
      <section className="blk-section">
        <div className="blk-id">
          <div className="block-num"></div>
          <div className="blk-hash"></div>
        </div>
        <div className="blk-txns">
          
        </div>
      </section>
    </div>
  )
}

export default Block