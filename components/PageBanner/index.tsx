import Link from "next/link";
import Container from "../Container";
import styles from './PageBanner.module.scss';

type PageBannerTypes = {
  pageTitle: string;
  pageDescription?: string;
}

export default function PageBanner({pageTitle, pageDescription}: PageBannerTypes) {
  return (
    <div className={styles['page-banner']}>
      <Container classes={styles['container']}>
        <div className={styles['breadcrumb']}>
          <span><Link href={'/'}>Home</Link> {'>'}</span>
          <span>{pageTitle}</span>
        </div>
        <h2 className={styles['title']}>{pageTitle}</h2>
        <span className={styles['description']}>{pageDescription}</span>
      </Container>
    </div>
  );
}
