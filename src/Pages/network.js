import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Capitalize } from '../misc/misc';

const Network = () => {
    /* This component/page prompts the user to choose between the networks (either testnet or mainnet) */
    
    const [getNetworks, setNetworks] = useState(['mainnet', 'kovan', 'rinkeby', 'ropsten', 'goerli'])

    return (
        <section className='network-prompt-section'>
            <div className=''>
                <div className="network-prompt-main">
                    {getNetworks.map(elem => {
                        return (
                            <Link to={`/${elem}`} key={getNetworks.indexOf(elem)}>
                                {elem !== "mainnet" ? `${Capitalize(elem)} Test Network` : 'Ethereum Mainnet'}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Network;