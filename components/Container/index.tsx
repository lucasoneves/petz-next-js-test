import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerTypes = {
  classes?: string;
  children: ReactNode;
};

export default function Container({ children, classes }: ContainerTypes) {
  return <div className={`${styles.container} ${classes}`}>{children}</div>;
}
