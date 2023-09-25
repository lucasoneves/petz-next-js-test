import styles from "./MainNavigation.module.scss";
import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href={"/about"}>Quem somos</Link>
        </li>
        <li>
          <Link className={styles['link-active']} href={"/new-schedule"}>Agendar Consulta</Link>
        </li>
      </ul>
    </nav>
  );
}
