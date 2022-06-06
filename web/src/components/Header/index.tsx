import styles from "./index.module.css";
import { Menu } from "./Menu";

import logo from "./logo.svg";

export function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={logo} width="220" height="56" alt="Capri Logo" />
      </div>
      <Menu />
    </div>
  );
}
