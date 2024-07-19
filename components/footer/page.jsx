import Image from "next/image";
import styles from "./page.module.css";
import footerlogo from "@/public/blacklogo.webp"
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.contentwrapper}>
            <Image className={styles.footerlogo} src={footerlogo} alt="logo" />
            <br />
            <br />
            <a className={styles.footertel} href="https://maps.app.goo.gl/Ws6oGK58aTAd3RXn6">
                м. Київ, проспект Берестейський, 93</a>
            <br />
            <br />
            <a className={styles.footertel} href="tel:+380935378674" target="_blank">+38 (093) 537 86 74</a>
            <br />
            <br />
            <Link href="/confidential" className={styles.confidentiallink}>Політика конфіденційності</Link>
            <br />
            <br />
            <p className={styles.p}>© 2024 АО "Юнікейс" - Всі права захищено</p>
            <br />
        </div>
    )
}