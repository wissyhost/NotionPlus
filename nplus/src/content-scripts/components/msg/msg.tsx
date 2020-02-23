import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { render } from 'react-dom'

export const showMsg = (msg: string) => {
  const reactRoot = document.createElement('div')
  reactRoot.setAttribute('id', 'NotionPlusMsg')
  document.body.append(reactRoot)
  render(React.createElement(Msg, { msg }), reactRoot)
}

export const Msg: React.FC<{ msg: string }> = ({ msg }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    const msgMountNode = document.getElementById('NotionPlusMsg')
    msgMountNode!.outerHTML = ''
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={msg}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
          </React.Fragment>
        }
      />
    </div>
  );
}
