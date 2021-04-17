import { useState } from "react"
import PageChange from 'components/PageChange/PageChange.js'


const Coin = ({coin}) => {
    const [isLoading, setIsLoading] = useState(false)

    const renderCoins = () =>{
        if (isLoading) {
            return <div  className={classes.sections}>
                        <div className={classes.container}>
                        <PageChange/>
                        </div>
                        </div>
                    
        }

        return (
            <div>
                <img src={coin.image.large} alt="" />
                <h1>{coin.name} </h1>
                <h1>{coin.id} </h1>
                <h1>{coin.symbol} </h1>
            </div>
        )
    }
    return (
        <div>
            {renderCoins()}
        </div>
        )
}

export default Coin