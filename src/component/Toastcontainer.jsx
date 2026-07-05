import React from "react";
import { ToastContainer } from "react-toastify";

const Toastcontainer = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Toastcontainer;
