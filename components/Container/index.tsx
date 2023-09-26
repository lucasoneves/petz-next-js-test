import { ReactNode } from "react";
import styles from './Container.module.scss';

export default function Container({ children, classes }: { children: ReactNode, classes: string }) {
  return <div className={`${styles.container} ${classes}`}>{children}</div>;
}
