import React from 'react';
import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import { Button } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>  
      <Button color="success" onClick={handleClickOpen}>
        Subscribe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <form>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="rose">
            Cancel
          </Button>
          <Button type="submit" color="success">
            Subscribe
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
