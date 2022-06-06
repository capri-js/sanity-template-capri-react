import { ReactNode } from "react";
import { Content } from "../Content";
import { Stack } from "../Stack";
import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
};
export function Section({ children }: Props) {
  return (
    <section className={styles.root}>
      <Content>
        <Stack>{children}</Stack>
      </Content>
    </section>
  );
}
