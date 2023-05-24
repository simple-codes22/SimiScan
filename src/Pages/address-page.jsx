import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NetworkInfo from "../components/NetworkInfo";
import { convertToEther, ExchangeRate, getProvider } from "../misc/ethTasks";
import '../CSS/address-page.css';
import { ToggleCopy } from "../misc/copy";

const Address = () => {

  const { network, hash } = useParams();
  const [addressDetails, setAddressDetails] = useState(null)

  useEffect(() => {
    const getAddressDetails = async () => {
      const provider = getProvider(network);
      const balance = await provider.getBalance(hash);
      const transactionCount = await provider.getTransactionCount(hash);

      return setAddressDetails({
        balance: balance,
        txCount: transactionCount
      })
    }
    
    getAddressDetails();

  }, [network, hash])

  return (
    <div>
      <NetworkInfo network={network} />
      <section className='address-section'>
        <div className='address-title'>
          <div className="address-topic">Address</div>
          <div className="address-hash" title={hash}>
            {hash} <ToggleCopy number='one' />
          </div>
        </div>
        {addressDetails !== null ?
        <div className='address-main'>
          <table className='address-overview'>
            <thead>
              <tr>
                <td>
                  Overview
                </td>
              </tr>
            </thead>
          <tbody>
            <tr className='address-balance'>
              <td>Address Balance:</td>
              <td>
                {convertToEther(addressDetails.balance)} Eth
              </td>
            </tr>
            <tr className='address-ether-value'>
              <td>
                Ether Value:
              </td>
              <td>
                <ExchangeRate price={convertToEther(addressDetails.balance)} />
              </td>
            </tr>
          </tbody>
          </table>
          <div className="address-tx-count">
            { addressDetails.txCount === 0 ? 
              <>
                No transaction have been made with this address
              </> : 
              <>
                {addressDetails.txCount === 1 ? 
                  <>
                    A total of 1 transaction has been made with this address
                  </> : 
                  <>
                    A total of {addressDetails.txCount} transactions have been made with this address
                  </>
                }
              </>
            }
          </div>
        </div>
        : <></>
        }
      </section>
    </div>
  )
}

export default Address;