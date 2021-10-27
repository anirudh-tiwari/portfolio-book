import React from "react";
import Dialog from "@material-ui/core/Dialog";
// import CloseIcon from "../../../Icons/CloseIcon";

function Popup(props) {
  const { title } = props;
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={props.width}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // style={{ width: props.width }}
      >
        <div className="px-10 py-10">
          <div className="flex justify-between items-center">
            <h2 className="relative ml-20 mt-10">
              <strong>{title}</strong>
            </h2>
            <div className="cursor-pointer" onClick={props.handleClose}>
              <img src={`/cross.svg`} alt="User" />
            </div>
          </div>
          {props.children}
        </div>
      </Dialog>
    </div>
  );
}
export default Popup;
