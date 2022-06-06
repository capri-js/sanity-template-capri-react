import type { Hero as Props } from "../../../sanity/schema";
import styles from "./index.module.css";
import { Content } from "../../Content";

export function Hero({ heading, text }: Props) {
  return (
    <section className={styles.root}>
      <Content>
        <div className={styles.heading}>{heading}</div>
        <h1 className={styles.text}>{text}</h1>
      </Content>
    </section>
  );
}
