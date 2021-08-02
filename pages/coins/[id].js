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
import SectionChart from "../../pages-sections/Detailpage-Sections/SectionChart"
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import SectionCoinNews from "../../pages-sections/Detailpage-Sections/SectionCoinNews";

const useStyles = makeStyles(styles);

export default function Home({coin, day, week, year, coinNewsData}) {
  const classes = useStyles();
//   const { ...rest } = props;
  return (
    <div>
      <Header
        brand="cryptonium"
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
            
      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
        <SectionCoinData coin={coin}/>
        <SectionChart day={day} week={week} year={year}/>
        <SectionCoinNews coinNewsData={coinNewsData} />
      {/* </div> */}
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

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`)
    const oneDay = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
    const sevenDay = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
    const oneYear = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`)
    const coinNews = await fetch(`https://newsapi.org/v2/everything?q=${id}&sortBy=publishedAt&language=en&apiKey=eac4785ce4574e5494e1af3166215957`)
    
    const data = await res.json()
    const oneDayChart = await oneDay.json()
    const sevenDayChart = await sevenDay.json()
    const oneYearChart = await oneYear.json()
    const coinNewsRes = await coinNews.json()
    
    return {
        props: {
            coin: data[0],
            day: formatData(oneDayChart.prices),
            week: formatData(sevenDayChart.prices),
            year: formatData(oneYearChart.prices),
            coinNewsData: coinNewsRes.articles,
        }
    }
}

