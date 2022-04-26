import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Capitalize } from '../misc/miniTask';
import '../CSS/NetworkStyle.css';

const Network = () => {
    /* This component/page prompts the user to choose between the networks (either testnet or mainnet) */
    
    const [getNetworks, ] = useState(['mainnet', 'kovan', 'rinkeby', 'ropsten', 'goerli'])

    return (
        <section className='network-prompt-base'>
            <div className='network-prompt-cover'>
                <div className='network-prompt-statement'>What Network Do You Want To Explore On? 🤔🤔</div>
                <div className="network-prompt-main">
                    {getNetworks.map(elem => {
                        return (
                            <Link to={`/${elem}`} key={getNetworks.indexOf(elem)} className='network-option'>
                                {elem !== "mainnet" ? `${Capitalize(elem)} Test Network` : 'Ethereum Mainnet'}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="mini-footer">
                SimiScan ⚡⚡
            </div>
        </section>
    )
}

export default Network;