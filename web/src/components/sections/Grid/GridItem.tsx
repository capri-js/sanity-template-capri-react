import { TextWithTitle } from "../../../sanity/schema";
import styles from "./GridItem.module.css";

export function GridItem({ text, title, emoji }: TextWithTitle) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.icon}>{emoji}</div>
        {title}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
