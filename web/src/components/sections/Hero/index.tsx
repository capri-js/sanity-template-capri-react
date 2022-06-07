import type { Hero as Props } from "../../../sanity/schema";
import styles from "./index.module.css";
import { Content } from "../../Content";

export function Hero({ heading, text }: Props) {
  return (
    <section className={styles.root}>
      <Content>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.text}>{text}</div>
      </Content>
    </section>
  );
}
