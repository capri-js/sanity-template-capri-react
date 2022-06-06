import type { Grid as Props } from "../../../sanity/schema";
import { GridItem } from "./GridItem";
import styles from "./index.module.css";
import { Section } from "../../Section";

export function Grid({ title, items }: Props) {
  return (
    <Section>
      <h2 className="">{title}</h2>
      <div className={styles.grid}>
        {items?.map(({ _key, ...props }) => (
          <GridItem key={_key} {...props} />
        ))}
      </div>
    </Section>
  );
}
