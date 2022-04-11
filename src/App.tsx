import { useRef } from "react";
import styles from "./App.module.scss";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  const modalRef = useRef();
  return (
    <div className={styles.App}>
      <Header />
      <Filter />
      <Modal ref={modalRef} />
      <Container />
    </div>
  );
}

export default App;
