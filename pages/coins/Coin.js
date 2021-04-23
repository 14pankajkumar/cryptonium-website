import { useState } from "react"
import PageChange from 'components/PageChange/PageChange.js'


const Coin = ({coin}) => {
    const [isLoading, setIsLoading] = useState(false)
    console.log(coin)
    const renderCoins = () =>{
        if (isLoading) {
            return <div  className={classes.sections}>
                        <div className={classes.container}>
                        <PageChange/>
                        </div>
                        </div>
                    
        }

        return (            
            <div className="bg-white mt-3 p-2 rounded border row">
                <div className="col-sm">
                    <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Market Cap</span>
                    <span>${coin.market_cap}</span>
                    </div>
                    <hr />
                    <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">
                        Total Supply
                    </span>
                    <span>{coin.total_supply}</span>
                    </div>
                </div>

                <div className="col-sm">
                    <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Volume(24H)</span>
                    <span>{coin.total_volume}</span>
                    </div>
                    <hr />
                    <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">high 24h</span>
                    <span>${coin.high_24h}</span>
                    </div>
                </div>

                <div className="col-sm">
                    <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">
                        Circulating Supply
                    </span>
                    <span>{coin.circulating_supply}</span>
                    </div>
                    <hr />
                    <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">low 24h</span>
                    <span>${coin.low_24h}</span>
                    </div>
                </div>
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