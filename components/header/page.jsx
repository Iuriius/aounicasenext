import Image from 'next/image'
import styles from "./page.module.css"
import Nav from "@/components/nav/page"

/*
/**|======================================
/**| img
/**|======================================
*/
import logo from '@/public/logo.webp'
/*
/**|======================================
/**| code
/**|======================================
*/
export default function Header() {
    return (
        <header className={styles.header}>
            <br />
            <Image className={styles.mainlogo} src={logo} alt="logo" />
            <Nav />
            <br />
        </header>
    )
}
