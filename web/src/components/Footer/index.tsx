import styles from "./index.module.css";
import github from "./github.svg";

export function Footer() {
  return (
    <div className={styles.root}>
      <a href="https://github.com/capri-js/capri">
        <img src={github} width="24" height="24" alt="GitHub Logo" />
        Visit Capri on GitHub
      </a>
    </div>
  );
}
