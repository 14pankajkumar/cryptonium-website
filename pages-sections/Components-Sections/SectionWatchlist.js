import React, { useEffect, useState, useContext } from 'react'

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

import coinGecko from 'apis/coinGecko.js'
import { AllCoinContext } from 'context/AllCoinContext.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PageChange from 'components/PageChange/PageChange.js'
import Link from 'next/link';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});


const SectionWatchlist = () => {

    const classes = useStyles();
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
            <div  className={classes.sections}>
                <div className={classes.container}>
                <div className={classes.title}>
                    <div style={{float:'left'}}>
                    <h2 className="title">Watchlist </h2>
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
export default SectionWatchlist