import logo from "../../Assets/Pokemon-logo2.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="pokemon logo" className={styles.header__image} />
      <h1 className={styles.header__text}>at it's best!</h1>
    </header>
  );
};

export default Header;
