import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NetworkInfo from "../components/NetworkInfo";

const Address = () => {

  const { network, hash } = useParams();
  const [exchangeRate, setexchangeRate] = useState(null);

  const getExchangeRate = async (token='ETH') => {
    const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${token}/USD`, {
      method: 'GET',
      headers: {
        'X-CoinAPI-Key': process.env.REACT_APP_EXCHANGE_RATE_KEY
      }
    })
    const resJsonFormat = await response.json();
    return setexchangeRate(resJsonFormat);
  }

  // useEffect(() => {getExchangeRate();}, [])


  return (
    <div>
      <NetworkInfo network={network} />
      <section className='address-section'>
        <div className='address-title'>
          <div className="address-topic">Address</div>
          <div className="address-hash">{hash}</div>
        </div>
        <div className='address-main'>
          <div className="address-balance">
            {/* Address balance */}
          </div>
          <div className="etherValue">
            {/* Dollar Equivalent */}
            {exchangeRate !== null ? exchangeRate.rate : <></>}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Address;