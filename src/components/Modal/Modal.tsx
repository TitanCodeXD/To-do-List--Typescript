import React from "react";

// CSS
import "./Modal.css";

// Icons
import { IoMdClose } from "react-icons/io";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal?.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className="fade" onClick={closeModal}></div>
      <div className="modal">
        <IoMdClose className="icon-modal" onClick={closeModal} />
        <div>
          <h2>Texto Modal</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
