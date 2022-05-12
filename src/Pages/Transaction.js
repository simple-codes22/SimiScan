import { useParams } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';

const Transaction = () => {
  const { network, hash } = useParams();
  console.log(hash)
  return (
    <div>
      <NetworkInfo network={network} />
      <section>
        <section className="title">
          Address
          <div className="subtitle">
            {hash}
          </div>
        </section>
      </section>
    </div>
  )
}

export default Transaction;