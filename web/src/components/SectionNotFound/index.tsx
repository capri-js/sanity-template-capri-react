import { Content } from "../Content";
import styles from "./index.module.css";

type Props = {
  type?: string;
};
export function SectionNotFound({ type }: Props) {
  return (
    <section className={styles.root}>
      <Content>
        Section not found: <span className={styles.type}>{type}</span>
      </Content>
    </section>
  );
}
