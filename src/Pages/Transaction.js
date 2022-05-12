// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NetworkInfo from '../components/NetworkInfo';
import '../CSS/txn-page.css';
// import { getProvider } from '../misc/ethTasks';


const Transaction = () => {
  
  const { network, hash } = useParams();
  // const [txnDetails, setTxnDetails] = useState(null);


  // const provider = getProvider(network);
  
  // useEffect(() => {
  //   // const txnPageDefaultWorks = async () => {
  //   //   const transactionDetails = await provider.getTransaction(hash);
  //   //   return setTxnDetails(transactionDetails);
  //   // }
  //   // txnPageDefaultWorks();

  // }, [hash, provider]);

  // console.log(txnDetails);

  return (
    <div>
      <NetworkInfo network={network} />
      <main>
        <section className="txn-page-title">
          <div className="txn-page-main">
            Transaction
          </div>
          <div title='Click to copy to Clipboard' className="txn-page-subtitle" onClick={(val) => {
            navigator.clipboard.writeText(val.target.innerText)
          }}>
            {hash}
          </div>
        </section>
        <section className='txn-page.details'>
          <div className='txn-page-transfer-details'>
            <div className='txn-page-from'>
              From
            </div>
            <div className="txn-page-to">
              To
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Transaction;