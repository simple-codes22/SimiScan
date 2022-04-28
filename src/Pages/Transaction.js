import { useParams } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';

const Transaction = () => {
  const { network, hash } = useParams();
  
  return (
    <div>
      <NetworkInfo network={network} />
      Transaction
    </div>
  )
}

export default Transaction