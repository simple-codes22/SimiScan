/* The Transaction details page */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NetworkInfo from "../components/NetworkInfo";
import { 
  convertToEther, 
  convertToGwei, 
  getProvider, 
  ExchangeRate 
} from "../misc/ethTasks";
import Spinner from "../misc/spinner";
import { ToggleCopy } from "../misc/copy";
import "../CSS/txn-page.css";

const Transaction = () => {
  const { network, hash } = useParams();
  const [txnDetails, setTxnDetails] = useState(null);

  useEffect(() => {
    const txnPageDefaultWorks = async () => {
      const provider = getProvider(network);
      const transactionDetails = await provider.getTransaction(hash);
      return setTxnDetails(transactionDetails);
    };
    txnPageDefaultWorks();
  }, [hash, network]);

  return (
    <div>
      <NetworkInfo network={network} />
      <main>
        <section className="txn-page-title">
          <div className="txn-page-main">Transaction</div>
          <div title="Click to copy to Clipboard" className="txn-page-subtitle">
            {hash}
            <ToggleCopy number='one' />
          </div>
        </section>
        {txnDetails !== null ? (
          <section className="txn-page-details">
            <table className="txn-page-transfer-details">
              <tbody>
                <tr className="txn-page-tr" id="txn-page-block">
                  <td>Block Number:</td>
                  <td>
                    <Link
                      to={`/${network}/block/${txnDetails.blockNumber}`}
                      className="txn-page-link"
                    >
                      {txnDetails.blockNumber} 
                    </Link>
                    <ToggleCopy number='two' />
                  </td>
                </tr>
                <tr className="txn-page-tr" id="txn-page-from">
                  <td>From:</td>
                  <td>
                    <Link
                      to={`/${network}/address/${txnDetails.from}`}
                      className="txn-page-link"
                    >
                      {txnDetails.from} 
                    </Link>
                    <ToggleCopy number='three' />
                  </td>
                </tr>
                <tr className="txn-page-tr" id="txn-page-to">
                  <td>To:</td>
                  <td>
                    <Link
                      to={`/${network}/address/${txnDetails.to}`}
                      className="txn-page-link"
                    >
                      {txnDetails.to} 
                    </Link>
                    <ToggleCopy number='four' />
                  </td>
                </tr>
                <tr className="txn-page-tr" id="txn-page-value">
                  <td>Value:</td>
                  <td>
                    {convertToEther(txnDetails.value)} Eth
                    <ExchangeRate price={convertToEther(txnDetails.value)} />
                  </td>
                </tr>
                <tr className="txn-page-tr" id="txn-page-gas-price">
                  <td>Gas Price:</td>
                  <td>
                    {convertToEther(txnDetails.gasPrice)} Eth (
                    {convertToGwei(txnDetails.gasPrice)} Gwei)
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        ) : (
          <Spinner />
        )}
      </main>
    </div>
  );
};

export default Transaction;
