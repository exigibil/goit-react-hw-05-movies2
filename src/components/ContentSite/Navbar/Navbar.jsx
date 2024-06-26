import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { SiThemoviedatabase } from "react-icons/si";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div><Link to="/"><SiThemoviedatabase className={styles.navlogo} /></Link></div>

      <div className={styles.navlinkContainer}>
        <div className={styles.navlink}><Link to="/">Home</Link></div>
        <div className={styles.navlink}><Link to="/movies">Movies</Link></div>
      </div>
    </div>
  );
}

export default Navbar;
