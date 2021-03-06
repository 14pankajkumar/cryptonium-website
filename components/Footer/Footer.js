/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
import FormDialog from "../Subscribe/Subscribe";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          
          <List className={classes.list}>
          <div >
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                // href="http://blog.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Careers
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Request Form
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Advertising
              </a>
            </ListItem>
            </div>
            <div >
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Privacy Policy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Terms of service
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Disclaimer
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                // href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Contact Us
              </a>
            </ListItem>
            </div>
          </List>
        </div>
        <div className={classes.right}>
          <div>
            <FormDialog/>
          </div>
          &copy; {1900 + new Date().getYear()} , made by{" "}
          <a
            // href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
            Maglux Tech
          </a>{" "}
         
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
