import {Haven_Bucharest, MineGuardian} from "@/app/projects/Projects";
import styles from "./page.module.css";

function Page(){
    return (
        <main className={"subtitle"}>
            <h1>{"Things I've built"}</h1>
            <p>{"Here is a list of the top projects I've built and contributed to"}</p>
            <div className={styles.projectsGrid}>
                <Haven_Bucharest/>
                <MineGuardian/>
            </div>
        </main>
    )
}

export default Page;