import Image from "next/image";
import styles from "./page.module.css";
import footerlogo from "@/public/blacklogo.webp"

export default function Footer() {
    return (
        <div className={styles.contentwrapper}>
            <Image className={styles.footerlogo} src={footerlogo} alt="logo" />
            <p className={styles.p}>м. Київ, проспект Берестейський, 93</p>
            <a className={styles.footertel} href="tel:%2B380935378674" target="_blank">+38 (093) 5378674</a>
            <br />
            <a className={styles.confidentiallink} routerLink="/confidential" ariaCurrentWhenActive="page">Політика конфіденційності</a>
            <p className={styles.p}>© 2024 АО "Юнікейс" - Всі права захищено</p>
        </div>
    )
}