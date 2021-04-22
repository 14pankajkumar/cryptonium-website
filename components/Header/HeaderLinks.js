/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BookIcon from '@material-ui/icons/Book';

// core components
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

import {useAuth} from "../../firebase/auth";
import firebaseClient from "../../firebase/firebaseClient";
import firebase from "firebase/app"
import "firebase/auth"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  firebaseClient();
  const {user} = useAuth();
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link href="/news" as="/news">
        <Button
          href="/news"
          color="transparent"
          className={classes.navLink}
        >
          <ImportContactsIcon className={classes.icons}/>News 
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link href="/upgrade" as="/upgrade">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Upgrade to PRO
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link href="/newsletter" as="/newsletter">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <MailOutlineIcon className={classes.icons} /> Newsletter
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link href="/blogs" as="/blogs">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <BookIcon className={classes.icons} /> Blogs
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem} hidden={user}>
      <Link href="/login" as="/login">
      <Tooltip
          id="login-tooltip"
          title="LogIn or SignUp"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          color="transparent"
            className={classes.navLink}
        >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button>
        </Tooltip>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem} hidden={!user}>
      <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={PersonOutlineIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
            <Link href="#">
            <a className={classes.dropdownLink}
            onClick={async () => {
              await firebase.auth().signOut();
              window.location.href = "/"
            }}
            >
              Log Out
            </a></Link>
          ]}
        />
        </ListItem>
    </List>
  );
}
