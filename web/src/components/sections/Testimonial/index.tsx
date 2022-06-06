import type { Testimonial as Props } from "../../../sanity/schema";
import styles from "./index.module.css";
import { Section } from "../../Section";
import { urlBuilder } from "../../../sanity";

export function Testimonial({ quote, name, info, image }: Props) {
  return (
    <Section>
      <div className={styles.root}>
        <blockquote className={styles.quote}>{quote}</blockquote>
        <footer className={styles.person}>
          {image && (
            <img
              className={styles.image}
              alt={name}
              width="64"
              height="64"
              src={urlBuilder.image(image).size(64, 64).url()}
            />
          )}
          <div className={styles.text}>
            <cite className={styles.name}>{name}</cite>
            <cite className={styles.info}>{info}</cite>
          </div>
        </footer>
      </div>
    </Section>
  );
}
