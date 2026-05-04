

export default function Home() {
    return (
        <div style={{
            minHeight: "calc(100vh - 72px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "-400px",
        }}>
            <h1 style={{ fontSize: "2rem", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Andrei Dumitru
            </h1>
            <p style={{ color: "var(--text-dim)" }}>
                I build apps that solve problems. And look good doing it.
            </p>
        </div>
    )
}