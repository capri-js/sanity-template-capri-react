import { NavLink } from "react-router-dom";
import { useMenu } from "../../sanity/useMenu";
import styles from "./Menu.module.css";

const active = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : "";

export function Menu() {
  const items = useMenu();
  return (
    <nav className={styles.root}>
      <ul>
        {items?.map(({ title, slug }) => (
          <li key={slug}>
            <NavLink to={slug} className={active}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
