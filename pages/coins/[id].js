import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionCoinData from "../../pages-sections/Detailpage-Sections/SectionCoinData";
import SectionDescription from "../../pages-sections/Detailpage-Sections/SectionDescription"
import SectionChart from "../../pages-sections/Detailpage-Sections/SectionChart"

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Home({coin, description, day, week, year, fiveYear}) {
  const classes = useStyles();
//   const { ...rest } = props;
  console.log(fiveYear);
  
  
  return (
    <div>
      <Header
        brand="magluxCoin"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 90,
          color: "white"
        }}
        // {...rest}
      />
      <Parallax image={require("assets/img/nextjs_header.png")} style={{height:'200px'}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              {/* <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
            
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCoinData coin={coin}/>
        <SectionChart day={day} week={week} year={year} fiveYear={fiveYear} />
        <SectionDescription description={description} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
    const {id} = context.query

    const des = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`)
    const oneDay = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
    const sevenDay = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
    const oneYear = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)
    const fiveYear = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1825`)

    const data = await res.json()
    const coinDes = await des.json()
    const oneDayChart = await oneDay.json()
    const sevenDayChart = await sevenDay.json()
    const oneYearChart = await oneYear.json()
    const fiveYearChart = await fiveYear.json()
    
    return {
        props: {
            coin: data[0],
            description: coinDes,
            day: formatData(oneDayChart.prices),
            week: formatData(sevenDayChart.prices),
            year: formatData(oneYearChart.prices),
            fiveYear: formatData(fiveYearChart.prices),
        }
    }
}

