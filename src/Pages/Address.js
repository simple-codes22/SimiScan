// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NetworkInfo from "../components/NetworkInfo";

const Address = () => {

  const { network, hash } = useParams();


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

            {/* {exchangeRate !== null ? exchangeRate.rate : <></>} */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Address;