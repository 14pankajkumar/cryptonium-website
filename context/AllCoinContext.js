import React, { createContext, useState } from "react";


export const AllCoinContext = createContext();


export const AllCoinContextProvider = props => {
    const [allCoinList, setAllCoinList] = useState([])

    return(
        <AllCoinContext.Provider value={{allCoinList}}>
            {props.children}
        </AllCoinContext.Provider>
    )
}