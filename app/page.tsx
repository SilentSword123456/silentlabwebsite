import Tesseract from "@/components/Tesseract";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.hero}>
            <div className={styles.tesseract}>
                <Tesseract />
            </div>
            <h1 className={styles.name}>Hi, I&apos;m Andrei Dumitru</h1>
            <p className={styles.tagline}>
                High-school student, pro programmer and I love working on new projects
            </p>
        </div>
    );
}