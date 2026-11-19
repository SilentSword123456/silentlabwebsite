"use client"

import Tesseract from "@/components/Tesseract";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("FFA500FF");
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <div>
            <h1 className={styles.name}>Hi, I&apos;m Andrei Dumitru</h1>
            <div className={styles.tagline}>
                <p>
                    I&apos;m a high-school and I love working on programming projects since I was 6y old
                </p>

                <p>
                    My favorite color is <button onClick={handleCopy} className={styles.favoriteColorBtn}>Orange</button>
                </p>

                <p>
                    For example, here is a simulation of a Tesseract! I just love watching it rotate :)
                </p>
            </div>


            <div className={styles.hero}>
                <div className={styles.tesseract}>
                    <Tesseract />
                </div>
            </div>
        </div>
    );
}