import styles from "./App.module.scss";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Filter />
    </div>
  );
}

export default App;
