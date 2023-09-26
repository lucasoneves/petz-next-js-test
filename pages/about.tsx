import AboutComponent from "../components/AboutComponent";
import PageBanner from "../components/PageBanner";
import styles from "../styles/Pages.module.scss";
export default function About() {
  return (
    <>
      <PageBanner />
      <div className={styles["page-content"]}>
        <AboutComponent />
      </div>
    </>
  );
}
