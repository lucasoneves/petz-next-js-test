import Container from "../Container";
import styles from './PageBanner.module.scss';

export default function PageBanner() {
  return (
    <div className={styles['page-banner']}>
      <Container classes={styles['container']}>
        <div className={styles['breadcrumb']}>
          <span>Home {'>'}</span>
          <span>Quem somos</span>
        </div>
        <h2 className={styles['title']}>Quem Somos</h2>
        <span className={styles['description']}>A maior rede de tratamento pokémon.</span>
      </Container>
    </div>
  );
}
