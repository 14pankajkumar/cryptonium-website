import React, { useState } from 'react'
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import PageChange from 'components/PageChange/PageChange.js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles, {
  table: {
    minWidth: 650,
  },
});


const SectionUpgrate = () => {

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
                    <h2 className="title">Upgrade to pro </h2>
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
export default SectionUpgrate