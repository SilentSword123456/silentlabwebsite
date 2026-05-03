import LinkedIn from "@/components/SocialMedia";
import styles from './page.module.css'

function Page() {
    return (
        <main className={styles.contactPage}>
            <h1>Contact</h1>
            <p>You can reach me through any of the following platforms</p>
            <div className={styles.socialsGrid}>
            <LinkedIn />
                {/* drop more here */}
            </div>
        </main>
    )
}

export default Page;