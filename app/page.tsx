import styles from './page.module.css'
import Tesseract from "@/components/Tesseract";

export default function Home() {
    return (
        <div>
            <div className={styles.tesseractContainer}>
                <Tesseract/>
            </div>
        </div>
    )
}