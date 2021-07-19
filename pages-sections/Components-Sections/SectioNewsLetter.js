import React, { useState } from 'react'
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import PageChange from 'components/PageChange/PageChange.js'
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});


const SectioNewsLetter = () => {

    const classes = useStyles();

    return (
        <div  className={classes.sections}>
            <div className={classes.container}>
            <div className={classes.title}>
                <div style={{float:'left'}}>
                <h2 className="title">NewsLetter </h2>
                </div>
            </div>
        
            </div>
        </div>
    );
}
export default SectioNewsLetter