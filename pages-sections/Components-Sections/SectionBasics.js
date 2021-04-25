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


const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});

const searchStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherite',
      },
      inputInput: {
          border:'solid',
          borderRadius:'10px',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
}))

const SectionBasics = ({coinList, secondPageCoin, thirdPageCoin, fourthPageCoin, fifthPageCoin}) => {
    const [search, setsearch] = useState('')
    const classes = useStyles();
    const searchclasses = searchStyles();
    const [isLoading, setIsLoading] = useState(false)

    const [pageFormat, setpageFormat] = useState("1");
    const determinePageFormat = () => {
        switch (pageFormat) {
          case "1":
            return coinList;
          case "2":
            return secondPageCoin;
          case "3":
            return thirdPageCoin;
          case "4":
            return fourthPageCoin;
          case "5":
            return fifthPageCoin;
          default:
            return coinList;
        }
      };


    const fileterCoins = determinePageFormat().filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

    const handleChange = e => {
        setsearch(e.target.value)
    }
  
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
                    <h2 className="title">Top 100 Cryptocoins </h2>
                    </div>
                    <div style={{paddingTop:'30px', float:'right'}}>
                        <div className={searchclasses.search}>
                            <div className={searchclasses.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: searchclasses.inputRoot,
                                input: searchclasses.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">#</TableCell>
                            <TableCell >Symbol</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell align="right">24H Change</TableCell>
                            {/* <TableCell align="right">7D Change</TableCell> */}
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Market cap</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {fileterCoins.map(coin => (  
                        <TableRow key={coin.id}>
                            <TableCell align="right">{coin.market_cap_rank}</TableCell>
                            <TableCell><Link href="/coins/[id]" as={`/coins/${coin.id}`}><a>
                                    <img
                                    src={coin.image}
                                    style={{width: 25, height: 25, marginRight: 10}}
                                    alt="/" />
                                    {coin.symbol.toUpperCase()}
                                </a>
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
                <Button color="primary" onClick={() => setpageFormat("1")}>1</Button>
                <Button color="primary" onClick={() => setpageFormat("2")}>2</Button>
                <Button color="primary" onClick={() => setpageFormat("3")}>3</Button>
                <Button color="primary" onClick={() => setpageFormat("4")}>4</Button>
                <Button color="primary" onClick={() => setpageFormat("5")}>5</Button>
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