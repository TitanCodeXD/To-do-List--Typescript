import React from "react";

// CSS
import "./Modal.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return (
    <div id="modal">
      <div className="fade"></div>
      <div className="modal">
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
