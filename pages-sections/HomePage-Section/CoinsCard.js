import React, { useEffect, useState, useContext } from 'react'
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
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
import Button from 'components/CustomButtons/Button.js'
import Image from 'next/image'


const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});

const CoinsCard = ({coinList}) => {
  const classes = useStyles();

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

    return (
        <div  className={classes.sections}>
            <div className={classes.container}>
            <div className={classes.title}>
                <div style={{float:'left'}}>
                <h2 className="title">Top 50 Cryptocoins </h2>
                </div>
            </div>
            <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">#</TableCell>
                        <TableCell >Image</TableCell>
                        <TableCell >Symbol</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell align="right">24H Change</TableCell>
                        {/* <TableCell align="right">7D Change</TableCell> */}
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Market cap</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {coinList.map(coin => (  
                    <TableRow key={coin.id}>
                        <TableCell align="right">{coin.market_cap_rank}</TableCell>
                        <TableCell><Link href="/coins/[id]" as={`/coins/${coin.id}`}><a>
                                <Image
                                src={coin.image}
                                height={25}
                                width={25}
                                alt={coin.symbol} />
                                </a>
                            </Link> 
                        </TableCell>
                        <TableCell>
                        <Link href="/coins/[id]" as={`/coins/${coin.id}`}>
                        <a>{coin.symbol.toUpperCase()} </a>
                        </Link>
                        </TableCell>
                        <TableCell><span>{coin.name} </span></TableCell>
                        <TableCell align="right"><span
                                className={coin.price_change_percentage_24h > 0 ? (
                                    'text-success'
                                ) : 'text-danger'}
                                >
                                {formatPercent(coin.price_change_percentage_24h)}
                                </span></TableCell>
                        <TableCell align="right">{formatDollar(coin.current_price, 20)}</TableCell>
                        <TableCell align="right">{formatDollar(coin.market_cap, 12)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        </div>
    );

}
export default CoinsCard