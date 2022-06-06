import type { Text as Props } from "../../../sanity/schema";
import styles from "./index.module.css";
import { Section } from "../../Section";
import { PortableText } from "@portabletext/react";

export function Text({ content }: Props) {
  return (
    <Section>
      <div className={styles.root}>
        {content && <PortableText value={content} />}
      </div>
    </Section>
  );
}
