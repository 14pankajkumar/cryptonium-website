/*eslint-disable*/
import React from "react"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

// ************
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

// ************
const useStyles = makeStyles(styles);
const theme = createMuiTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Login(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  const classes = useStyles();
  return (
      
      <ListItem className={classes.listItem}>
        <Tooltip
          id="login-tooltip"
          title="LogIn or SignUp"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
          onClick={handleClickOpen}
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button>
        </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">LogIn</DialogTitle>
        <form>
        <ThemeProvider theme={theme}>
        <DialogContent>
          <TextField
            color="secondary"
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            required
          />
          <TextField
            color="secondary"
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            required
          />
        </DialogContent>
        </ThemeProvider>
        <DialogActions>
          <Button onClick={handleClose} color="rose">
            Cancel
          </Button>
          <Button type="submit" color="success">
            LogIn
          </Button>
        </DialogActions>
        <DialogContent>
        <DialogContentText>
        <Button
          onClick={handleClickOpen}
            color="transparent"
            className={classes.navLink}
            align="center"
          >
            Forgot password
          </Button>

        <br/>
        <Button
          onClick={handleClickOpen}
            color="transparent"
            className={classes.navLink}
          >
            SignUp
          </Button>
        </DialogContentText>
        </DialogContent>
        </form>
      </Dialog> 
      </ListItem>
    
      
  );
}
