import { MouseEventHandler, ReactNode } from "react";
import styles from './BoxAlertComponent.module.scss';

type BoxAlertType = {
  title: string;
  message?: string;
  children?: ReactNode;
  titleButton?: string;
  action: MouseEventHandler
}

export default function BoxAlertComponent({title, message, children, titleButton, action}: BoxAlertType) {
  return (
    <div className={styles['box-alert']}>
      <h3 className={styles['title']}>{title}</h3>
      {children}
      <span className={styles['message']}>{message}</span>
      <button className={styles['button']} onClick={action}>{titleButton}</button>
    </div>
  );
}
