import React, { useEffect, useState, useContext } from 'react'

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

import PageChange from 'components/PageChange/PageChange.js'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});


const SectionDescription = ({description}) => {

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
                <h2 className="title">Description </h2>
                </div>
                    <div className="bg-white mt-3 p-2 rounded border row">
                        

                       <Typography>{description.description.en} </Typography>
                        
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
export default SectionDescription