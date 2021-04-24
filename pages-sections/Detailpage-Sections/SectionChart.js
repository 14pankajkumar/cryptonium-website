import React, { useEffect, useState, useRef } from 'react'
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import PageChange from 'components/PageChange/PageChange.js'
import { makeStyles } from '@material-ui/core/styles';
import Chartjs from "chart.js";
import { historyOptions } from "../../chartConfig/chartConfig"

const useStyles = makeStyles(styles);


const SectionChart = ({day, week, year}) => {
    const chartRef = useRef();
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
        switch (timeFormat) {
          case "24h":
            return day;
          case "7d":
            return week;
          case "1y":
            return year;
          default:
            return day;
        }
      };

    useEffect(() => {
        if (chartRef && chartRef.current) {
            console.log('Yeah');
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label:'',
                        data: determineTimeFormat(),
                        backgroundColor: "rgba(174, 305, 194, 0.5)",
                        borderColor: "rgba(174, 305, 194, 0.4",
                        pointRadius: 1,
                    }]
                },
                options: {
                    ...historyOptions,
                }
            })
            
        }
    });

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
                    <div className="bg-white mt-3 p-2 rounded border row">
                        
                    <div>
                        <canvas ref={chartRef} id="myChart" width={250} height={350}></canvas>
                    </div>
                    <div className="chart-button mt-1">
                        <button
                        onClick={() => setTimeFormat("24h")}
                        className="btn btn-outline-secondary btn-sm"
                        >
                        24h
                        </button>
                        <button
                        onClick={() => setTimeFormat("7d")}
                        className="btn btn-outline-secondary btn-sm mx-1"
                        >
                        7d
                        </button>
                        <button
                        onClick={() => setTimeFormat("1y")}
                        className="btn btn-outline-secondary btn-sm"
                        >
                        1y
                        </button>
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
export default SectionChart