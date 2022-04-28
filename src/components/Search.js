import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    
    const [searchInfo, setSearchInfo] = useState();

    const giveSearchDetails = () => {
        navigate(`address/${searchInfo}`)
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
