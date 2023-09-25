import styles from './Footer.module.scss';

type FooterTypes = {
  description?: string
}

export default function Footer({description}: FooterTypes) {
  return (
    <footer className={styles.footer}>
      <p>
        {description}
      </p>
    </footer>
  );
}
