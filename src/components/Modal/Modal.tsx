import React, { useContext, forwardRef } from "react";
import ReactDom from "react-dom";

import { AiOutlineClose } from "react-icons/ai";
import GlobalContext from "../../context/GlobalContext";
import Spinner from "../Spinner/Spinner";
import styles from "./Modal.module.scss";

const Modal: React.FC<any> = forwardRef(({ children }, ref) => {
  const { showModal, setShowModal, loading } = useContext(GlobalContext)!;

  const close = () => {
    setShowModal(false);
  };

  if (showModal) {
    return ReactDom.createPortal(
      <div className={styles.modal} data-testid="modal">
        <div className={styles.modal__backdrop} onClick={close}></div>
        <div className={styles.modal__box}>
          <i onClick={close}>
            <AiOutlineClose />
          </i>
          {loading ? (
            <div className={styles.load}>
              <h1>Loading...</h1>
              <Spinner />
            </div>
          ) : null}
        </div>
      </div>,
      document.getElementById("modal__root")!
    );
  }

  return null;
});

export default Modal;
