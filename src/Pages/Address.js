import { useParams } from "react-router-dom";
import NetworkInfo from "../components/NetworkInfo";

const Address = () => {
  const { network, hash } = useParams();
  return (
    <div>
      <NetworkInfo network={network} />
      Address
    </div>
  )
}

export default Address;