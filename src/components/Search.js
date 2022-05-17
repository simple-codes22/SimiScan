import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProvider } from "../misc/ethTasks";

const Search = ({ ethNetwork }) => {
    const navigate = useNavigate();
    
    const [searchInfo, setSearchInfo] = useState();
    const filters = ['txn', 'block', 'address', 'token']

    const giveSearchDetails = () => {
        /* Since I didn't know how etherscan would automatically distinguish what is what. I came up with my own method */

        const provider = getProvider(ethNetwork);
        if (searchInfo.slice(0, 2) !== '0x') {
            // To check if the search info is not a hexadecimal
            const pattern = /[a-z]/i;
            if (!pattern.test(searchInfo)) {
                provider.getBlock(parseInt(searchInfo)).then(resp => {
                    console.log(resp)
                    return navigate(`${filters[1]}/${searchInfo}`)
                })
            } 
            return navigate(`/${ethNetwork}/error`)
        }
        if (searchInfo.length > 42) {
            provider.getTransaction(searchInfo).then(resp => {
                console.log(resp)
                return navigate(`${filters[0]}/${searchInfo}`)
            })
        }
        if (searchInfo.length === 42) {
            provider.getCode(searchInfo).then(resp => {
                // I used the getCode() method to find out if the address is a wallet address or contract address

                if (resp === '0x') return navigate(`${filters[2]}/${searchInfo}`);
                return navigate(`${filters[3]}/${searchInfo}`)

            }).catch(err => {
                // I haven't set out what to do yet if an error occurs
                // I'll maybe navigate to a 'not found' page
                return navigate(`/${ethNetwork}/error`)
            })
        }
    }

    return (
        <div>
            <div className="tx-search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by Address / Txn Hash / Block / Token"
                    onChange={(resp) => setSearchInfo(resp.target.value)}
                    onKeyUp={(resp) => {
                        if (resp.key === 'Enter') {
                            giveSearchDetails();
                        }
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={giveSearchDetails}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
