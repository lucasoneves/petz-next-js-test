import styles from './MainNavigation.module.scss'

export default function MainNavigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="">Quem somos</a>
        </li>
        <li>
          <a className={styles['link-active']} href="">Agendar Consulta</a>
        </li>
      </ul>
    </nav>
  );
}
