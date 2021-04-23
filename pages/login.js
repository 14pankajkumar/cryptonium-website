import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/lab

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import image from "assets/img/bg7.jpg";

// ************
import {useAuth} from "../firebase/auth";
import firebaseClient from "../firebase/firebaseClient";
import firebase from "firebase/app"
import "firebase/auth"

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  firebaseClient();
  const {user} = useAuth();
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });
  const classes = useStyles();
  const { ...rest } = props;
  if (!user) {
    return (
      <div>
        <Header
          brand="magluxCoin"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 80,
            color: "white"
          }}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes[cardAnimaton]}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                    <ThemeProvider theme={theme}>
                    <TextField
                      color="secondary"
                      margin="dense"
                      id="email"
                      label="Email"
                      type="email"
                      fullWidth
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <TextField
                      color="secondary"
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth
                      value={pass}
                      onChange={(e) => setpass(e.target.value)}
                    />
                    </ThemeProvider>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    <Button color="primary" 
                      disabled={email === "" || pass === ""}
                      onClick={async () => {
                        await firebase.auth().createUserWithEmailAndPassword(email,pass).then(function() {
                          window.location.href = "/"
                        }).catch(function(error) {
                          const message = error.message;
                          alert(error)
                        })
                      }}
                      >
                        Sign Up
                      </Button>
                      <Button color="success" 
                        disabled={email === "" || pass === ""}
                        onClick={async () => {
                          await firebase.auth().signInWithEmailAndPassword(email,pass).then(function() {
                            window.location.href = "/"
                          }).catch(function(error) {
                            const message = error.message;
                            alert(error)
                          })
                        }}
                        >
                          Log In
                        </Button>
                    </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
  window.location.href = "/"
}
