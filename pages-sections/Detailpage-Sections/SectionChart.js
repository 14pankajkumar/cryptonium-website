import React, { useEffect, useState, useRef } from 'react'
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import PageChange from 'components/PageChange/PageChange.js'
import { makeStyles } from '@material-ui/core/styles';
import Chartjs from "chart.js";
import { historyOptions } from "../../chartConfig/chartConfig"
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);


const SectionChart = ({day, week, year, fiveYear}) => {
    const chartRef = useRef();
    const classes = useStyles();
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
        switch (timeFormat) {
          case "24h":
            return day;
          case "7d":
            return week;
          case "1y":
            return year;
          case "5y":
            return fiveYear;
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
                        pointRadius: 2,
                    }]
                },
                options: {
                    ...historyOptions,
                }
            })
            
        }
    });

        return (
            <div  className={classes.sections}>
                <div className={classes.container}>
                    <div className="bg-white mt-3 p-2 rounded border row">
                        
                    <div>
                        <canvas ref={chartRef} id="myChart" width={250} height={350}></canvas>
                    </div>
                    <div className="chart-button mt-1">
                        <Button
                        color="primary"
                        onClick={() => setTimeFormat("24h")}
                        className="btn btn-outline-secondary btn-sm"
                        >
                        24h
                        </Button>
                        <Button
                        color="primary"
                        onClick={() => setTimeFormat("7d")}
                        className="btn btn-outline-secondary btn-sm mx-1"
                        >
                        7d
                        </Button>
                        <Button
                        color="primary"
                        onClick={() => setTimeFormat("1y")}
                        className="btn btn-outline-secondary btn-sm"
                        >
                        1y
                        </Button>
                        <Button
                        color="primary"
                        onClick={() => setTimeFormat("5y")}
                        className="btn btn-outline-secondary btn-sm"
                        >
                        5y
                        </Button>
                    </div>
                        
                    </div>
                </div>
            </div>
        );

}
export default SectionChart