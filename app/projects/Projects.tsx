import Image from "next/image";
import styles from "./page.module.css";
import {CustomSite, Github} from "@/components/SocialMedias";
import { Darumadrop_One, Jua } from "next/font/google";

const darumadrop = Darumadrop_One({
    subsets: ["latin"],
    weight: "400",
});

const jua = Jua({
    subsets: ["latin"],
    weight: "400",
});

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
            <h2>MineGuardian</h2>
            <Image src={"/MineGuardian Dashboard.png"}
                   alt={"Photo of server list from MineGuardian"}
                   width={1280}
                   height={960}/>
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

export function Haven_Bucharest(){
    return (
        <div className={styles.card}>
            <h2 className={`text-center text-[35px]! tracking-wide ${darumadrop.className}`}>Haven Bucharest</h2>

            <div className={"rounded-lg bg-cover bg-center bg-no-repeat"}
                 style={{ backgroundImage: "url('/Haven-bg.svg')", border: '2px solid #888', borderRadius: '8px' }}>

                <Image src={"/HavenBucharest.jpg"}
                       alt={"Photo from Google, Haven Bucharest"}
                       width={1280}
                       height={960}
                       className="relative z-10 mx-auto h-auto max-w-full p-1"/>

            </div>

            <div className={`${darumadrop.className}`}>
                <p>
                    I was the PoC (Point of Contact) and Lead Organizer for Haven Bucharest witch took place on 14 Nov 2026, a one-day free hackathon for 35 teens who shipped over 270h of games on GitHub and itch.io, hosted at Google, Romania.
                </p>
                <p>
                    I contributed significantly to the project by raising over 1400$ for the event and managed the budget, collaborating with Google personnel to host Haven at their office, planning event logistics, marketing the event, finding volunteers and overseeing 3 other Haven Bucharest staff.
                </p>
            </div>

            <div className={styles.links}>
                <CustomSite url={"https://haven.hackclub.com/bucharest"}></CustomSite>
            </div>
        </div>
    )
}