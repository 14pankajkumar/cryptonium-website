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
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import Image from 'next/image'

const useStyles = makeStyles(styles);

export default function Home({post}) {
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
      <Parallax image={post.image} style={{height:'200px'}}>
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
      <div  className={classes.sections}>
          <div className={classes.container}>
          <div className={classes.title}>
              <div style={{float:'left'}}>
              <h2 className="title">{post.title} </h2>
              </div>
          </div>
          <div className="bg-white mt-3 p-2 rounded border row">
            <p>{post.body}</p>
            </div>
          </div>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
    const {id} = context.query
    const res = await fetch(`https://maglux-tech.herokuapp.com/api/blogs/${id}`)
    const blogPost = await res.json()
    
    return {
        props: {
            post: blogPost,
        }
    }
}

