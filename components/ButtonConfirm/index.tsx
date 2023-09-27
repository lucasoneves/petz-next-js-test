import { MouseEventHandler } from "react";
import styles from './Button.module.scss';

type ButtonConfirmTypes = {
  title: string;
  click: MouseEventHandler
}

export default function ButtonConfirm({title, click}: ButtonConfirmTypes) {
  return <button className={styles['button-confirm']} onClick={click}>{title}</button>
}