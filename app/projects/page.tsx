import {ICare, MineGuardian} from "@/app/projects/Projects";
import styles from "./page.module.css";

function Page(){
    return (
        <main className={"subtitle"}>
            <h1>{"Problems I've solved"}</h1>
            <p>{"Here are listed the top projects I've built or have helped building"}</p>
            <div className={styles.projectsGrid}>
                <ICare/>
                <MineGuardian/>
            </div>
        </main>
    )
}

export default Page;