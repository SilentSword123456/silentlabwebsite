import Image from "next/image";
import styles from "./page.module.css";
import {CustomSite, Github} from "@/components/SocialMedias";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    site?: string;
    backend?: string;
}



export function MineGuardian(){
    return (
        <div className={styles.card}>
            <Image src={"/MineGuardian.png"}
                   alt={"MineGuardian logo"}
                   width={400}
                   height={200}
                   style={{ mixBlendMode: 'lighten' }}
            />
            <h2>MineGuardian</h2>
            <p>An administration tool for Minecraft Servers that automates all of the slow manual processes such as installing, connecting to the console, hosting, and more</p>
            <div className={styles.tags}>
                <span key={"React"} className={styles.tag}>React</span>
                <span key={"Python"} className={styles.tag}>Python</span>
                <span key={"Flask"} className={styles.tag}>Flask</span>
                <span key={"SQLite"} className={styles.tag}>SQLite</span>
            </div>
            <div className={styles.links}>
                <Github url={"https://github.com/SilentSword123456/MineGuardian-WebPage"}></Github>
                <CustomSite url={"https://frontend.silentlab.work"}></CustomSite>
            </div>
        </div>
    )
}