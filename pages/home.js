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
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import NewsCard from "../pages-sections/HomePage-Section/NewsCard";
import CoinsCard from "../pages-sections/HomePage-Section/CoinsCard";
import BlogsCard from "../pages-sections/HomePage-Section/BlogsCard";

const useStyles = makeStyles(styles);

export default function Home({newsData, coinList, blogData}) {
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
      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
        <NewsCard newsData={newsData} />
        <CoinsCard coinList={coinList} />
        <BlogsCard blogData={blogData} />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const id = "crypto OR blockchain OR elon OR vitalik OR defi OR nft"
  const res = await fetch(`https://newsapi.org/v2/everything?q=${id}&sortBy=publishedAt&language=en&apiKey=eac4785ce4574e5494e1af3166215957`)
  const market = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
  const blogs = await fetch('https://maglux-tech.herokuapp.com/api/blogs/')

  const newsRes = await res.json()
  const marketRes = await market.json()
  const blogsRes = await blogs.json()

  return {
    props: {
      newsData: newsRes.articles,
      coinList: marketRes,
      blogData: blogsRes
    }
  }
}
