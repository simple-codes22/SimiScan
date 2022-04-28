import { Capitalize } from "../misc/miniTask";

const NetworkInfo = ({ network }) => {
  return (
    <div className='network-info'>
        {network !== 'mainnet' ? `Running On The ${Capitalize(network)} Test Network ⚡⚡` : "Running On The Ethereum Mainnet ⚡⚡"}
    </div>
  )
}

export default NetworkInfo