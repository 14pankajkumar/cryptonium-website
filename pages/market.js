import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
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
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Market({coinList, secondPageCoin, thirdPageCoin, fourthPageCoin, fifthPageCoin, globalDataCoin}) {
  const classes = useStyles();
  
  // const { ...rest } = props;
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
                <h3 className={classes.subtitle}>
                  Coins: {globalDataCoin.active_cryptocurrencies}
                </h3>
                <h3 className={classes.subtitle}>
                  Markets: {globalDataCoin.markets}
                </h3>
                <h3 className={classes.subtitle}>
                  Dominance: BTC {formatPercent(globalDataCoin.market_cap_percentage.btc)} ETH {formatPercent(globalDataCoin.market_cap_percentage.eth)}     
                </h3>
              </div> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics coinList={coinList} secondPageCoin={secondPageCoin} thirdPageCoin={thirdPageCoin} 
        fourthPageCoin={fourthPageCoin} fifthPageCoin={fifthPageCoin} />
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
  const second = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false')
  const third = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=false')
  const fourth = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=4&sparkline=false')
  const fifth = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=5&sparkline=false')
  const global = await fetch("https://api.coingecko.com/api/v3/global")

  const filteredCoins = await res.json()
  const secondPage = await second.json()
  const thirdPage = await third.json()
  const fourthPage = await fourth.json()
  const fifthPage = await fifth.json()
  const globalData = await global.json()
  return {
    props: {
      coinList: filteredCoins,
      secondPageCoin: secondPage,
      thirdPageCoin: thirdPage,
      fourthPageCoin: fourthPage,
      fifthPageCoin: fifthPage,
      globalDataCoin: globalData.data,
    }
  }
}

