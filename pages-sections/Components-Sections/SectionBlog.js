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

const SectionBlog = () => {

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
                    <h2 className="title">Top 100 Cryptocoins </h2>
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
export default SectionBlog