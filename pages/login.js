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

// import image from "assets/img/bg7.jpg";

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

  const provider = new firebase.auth.GoogleAuthProvider();


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

  const signInWithGoogle = () => {
      firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  if (!user) {
    return (
      <div>
        <Header
          brand="cryptonium"
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
            // backgroundImage: "url(" + image + ")",
            backgroundColor: "white",
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
                          onClick={() => signInWithGoogle()}
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
