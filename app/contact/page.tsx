import { LinkedIn, Slack, Github, Email } from "@/components/SocialMedia";
import styles from './page.module.css'

function Page() {
    return (
        <main className={"subtitle"}>
            <h1>Contact</h1>
            <p>You can reach me through any of the following platforms</p>
            <div className={styles.socialsGrid}>
                <LinkedIn />
                <Slack />
                <Github />
                <Email />
            </div>
        </main>
    )
}

export default Page;