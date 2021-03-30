import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CostonToast = ({clostToast}) => {
    return <div>Somthing Wenr Wrong
        <button onClick={clostToast}>Close</button>
    </div>
}

toast.configure();
const Toast = () => {
  const notify = () => {
    toast("Basic Toast", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success Toast", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info Toast", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CostonToast/>, { position: toast.POSITION.BOTTOM_RIGHT, autoClose: false });
    toast.error("Error Toast", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Basic Toast", { position: toast.POSITION.BOTTOM_LEFT });
  };
  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default Toast;
