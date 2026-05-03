'use client';

import { usePathname } from 'next/navigation';
import Tesseract from './Tesseract';
import styles from './TesseractShell.module.css';

function TesseractShell() {
    const isHome = usePathname() === '/';
    return (
        <div className={`${styles.shell} ${isHome ? styles.visible : styles.hidden}`}>
            <Tesseract isVisible={isHome}/>
        </div>
    );
}

export default TesseractShell;