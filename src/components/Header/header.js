import * as React from "react"
import { Link } from "gatsby";
import * as styles from './header.module.css';

const Header = () => (
  <header className={ styles.header }>   
      <h1 className={styles.logoTitle}>GOLDWIN WEB STORE</h1> 

      <nav className={styles.nav}> 
        <Link className={styles.navLink} to="/"> Search </Link> 
        <Link className={styles.navLink} to="/services"> Favorite </Link>
        <Link className={styles.navLink} to="/about"> Cart </Link> 
        <Link className={styles.navLink} to="/contact">Hamberger</Link> {/* Use style.navLink */}
      </nav>
  </header>
);

export default Header;
