import { LinkedIn, Github, Email } from "../../components/SocialMedias";
import styles from './page.module.css'

function Page() {
    return (
        <main className={"subtitle"}>
            <h1>Contact</h1>
            <p>You can reach me through any of the following platforms</p>
            <div className={styles.socialsGrid}>
                <LinkedIn />
                <Github url={"https://github.com/SilentSword123456"}/>
                <Email />
            </div>
        </main>
    )
}

export default Page;