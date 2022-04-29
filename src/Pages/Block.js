import { useParams } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';

const Block = () => {
  const { network, hash } = useParams();
  console.log(hash)
  return (
    <div>
      <NetworkInfo network={network} />
      Block
    </div>
  )
}

export default Block