import Tesseract from "@/components/Tesseract";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.hero}>
            <div className={styles.tesseract}>
                <Tesseract />
            </div>
            <h1 className={styles.name}>Andrei Dumitru</h1>
            <p className={styles.tagline}>
                I build apps that solve problems. And look good doing it.
            </p>
        </div>
    );
}