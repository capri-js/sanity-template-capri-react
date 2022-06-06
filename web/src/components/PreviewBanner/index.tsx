import styles from "./index.module.css";

/**
 * Component to display a banner when the site is viewed as SPA.
 */
export function PreviewBanner() {
  return <div className={styles.root}>Preview Mode</div>;
}
