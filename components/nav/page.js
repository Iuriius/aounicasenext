import Link from 'next/link';
import styles from './page.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navigation}>
                <li>
                    <Link className={styles.link} href="/">Головна</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/cases">Послуги</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/ourteam">Команда</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/contacts">Контакти</Link>
                </li>
            </ul>
        </nav>
    );
}
