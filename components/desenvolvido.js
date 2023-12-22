import Link from "next/link"

export default function desenvolvido() {
    return (
        <div style={{ background: "#16120A", color: "white", textAlign: "center", fontSize: "14px", fontWeight: "300", padding: "5px" }}>
            Desenvolvido por <Link style={{ color: "white" }} href="https://isaquesestudios.com">Isaques Estúdios</Link> || <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
        </div>
    )
}