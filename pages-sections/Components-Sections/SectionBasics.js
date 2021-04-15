import React, { useEffect, useState, useContext } from 'react'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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


const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});

const SectionBasics = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const { allCoinList } = useContext(AllCoinContext);
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
  console.log(allCoinList);
  
  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true)
          const response = await coinGecko.get("/coins/markets", {
              params:{
                  vs_currency : "usd",
                  ids : allCoinList.join(",")
              }
          })
          setCoins(response.data)
          setIsLoading(false)
      }
      fetchData()
  },[allCoinList])

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
              <h2 className="title">Top 100 Cryptocoins</h2>
              </div>
              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell align="right">#</TableCell>
                          <TableCell>Symbol</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">24H Change</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Market cap</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {coins.map(coin => (  
                      <TableRow key={coin.id}>
                          <TableCell align="right">{coin.market_cap_rank}</TableCell>
                          <TableCell><a href={`/coins/${coin.id}`} className="text-decoration-none my-1 coin" >
                                  <img
                                  src={coin.image}
                                  style={{width: 25, height: 25, marginRight: 10}}
                                  alt="/" />
                                  {coin.symbol.toUpperCase()}
                              </a>
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
  return (
      <div>
          {renderCoins()}
      </div>
  )

}

export default SectionBasics