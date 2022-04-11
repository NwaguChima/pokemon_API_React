import styles from "./App.module.scss";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Filter />
      <Container />
    </div>
  );
}

export default App;
