import React, { useEffect, useState, useContext } from 'react'

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

import PageChange from 'components/PageChange/PageChange.js'

import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'


const useStyles = makeStyles(styles);


const SectionCoinData = ({coin}) => {

    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)

    const formatPercent = number =>
    `${new Number(number).toFixed(2)}%`

    const formatDollar = (number, maximumSignificantDigits) =>
        new Intl.NumberFormat(
        `en-US`,
        {
            style: 'currency',
            currency: 'usd',
            maximumSignificantDigits
        })
        .format(number);

    const formatNumber = (number, maximumSignificantDigits) =>
        new Intl.NumberFormat(
        `en-US`,
        {
            maximumSignificantDigits
        })
        .format(number);


    const renderCoins = () =>{
        if (isLoading) {
            return <div  className={classes.sections}>
                        <div className={classes.container}>
                        <PageChange/>
                        </div>
                        </div>
                    
        }

        return (
            <div  className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <div style={{float:'left'}}>
                        <h2 className="title"><Image
                                            src={coin.image}
                                            height={50}
                                            width={50}
                                            style={{ padding: 10}}
                                            alt="" /> 
                                            {coin.name}
                                            </h2>
                        </div>
                        <div style={{float:'right'}}>
                            <h3>{formatDollar(coin.current_price, 20)}
                            <small style={{marginLeft:'8px'}} className={coin.price_change_percentage_24h > 0 ? (
                                        'text-success'
                                    ) : 'text-danger'}>
                                        {formatPercent(coin.price_change_percentage_24h)}
                            </small>
                            </h3>
                        </div>
                    </div>
                    <div className="p-4"></div>
                    <div className="bg-white mt-3 p-2 rounded border row">
                        <div className="col-sm">
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">Market Cap Rank</strong>
                            <strong>#{coin.market_cap_rank}</strong>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">
                                Total Supply
                            </strong>
                            <strong>{formatNumber(coin.total_supply, 12)}</strong>
                            </div>
                            <hr />
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">Volume(24H)</strong>
                            <strong>{formatDollar(coin.total_volume, 12)}</strong>
                            </div>
                        </div>

                        <div className="col-sm">
                        <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">Market Cap</strong>
                            <strong>{formatDollar(coin.market_cap, 12)}</strong>
                            </div>
                            <hr />
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">
                                Circulating Supply
                            </strong>
                            <strong>{formatNumber(coin.circulating_supply, 12)}</strong>
                            </div>
                            <hr />
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">high 24h</strong>
                            <strong>{formatDollar(coin.high_24h, 20)}</strong>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">Fully Diluted Valuation</strong>
                            <strong>{formatDollar(coin.fully_diluted_valuation, 12)}</strong>
                            </div>
                            <hr />
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">
                                Max Supply
                            </strong>
                            <strong>{formatNumber(coin.max_supply, 12)}</strong>
                            </div>
                            <hr />
                            <div className="d-flex flex-column">
                            <strong className="text-muted coin-data-category">low 24h</strong>
                            <strong>{formatDollar(coin.low_24h, 20)}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            {renderCoins()}
        </div>
    )

}
export default SectionCoinData