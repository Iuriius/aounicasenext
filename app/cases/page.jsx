import Accordion from "@/components/accordion/page"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image";
/*
/**|======================================
/**| pics
/**|======================================
*/
import military_tech from "@/public/military_tech.svg"
import how_to_reg from "@/public/how_to_reg.svg"
import handshake from "@/public/handshake.svg"
import gavel from "@/public/gavel.svg"
import fact_check from "@/public/fact_check.svg"
import diversity_1 from "@/public/diversity_1.svg"
import checklist from "@/public/checklist.svg"
import balance from "@/public/balance.svg"
/*
/**|======================================
/**| code
/**|======================================
*/
export default function Cases() {
    return (
        <>
            <br />
            <Image className={styles.image} src={checklist} alt="checklist" />
            <h2>ЯК ВІДБУВАЄТЬСЯ НАША РОБОТА?</h2>
            <Accordion />
            <br />
            <div className={styles.note2}>
                <p><b>Вартість усної консультації з адвокатом по телефону:</b></p>
                <p>(без укладання договору та вивчення документів)</p>
                <b>💰 1000 грн.</b>
                <br />
                <br />
                <hr />
                <br />
                <p><b>Оскарження штрафів ТЦК:</b></p>
                <p>ознайомлення з матеріалами справи</p>
                <b>💰 4000 грн.</b>
                <br />
                <p>формування позиції та написання клопотання</p>
                <b>💰 4000 грн.</b>
                <br />
                <br />
                <hr />
                <br />
                <p>☎️ номер постійного звʼязку:</p>
                <br />
                <a className={styles.a} href="tel:%2B380935378674">+38 (093) 537 86 74</a>
            </div>
            <br />
            <h2>ОТРИМАЙТЕ ЮРИДИЧНУ ДОПОМОГУ</h2>
            <br />
            <div className={styles.cardscontainer}>
                <div className={styles.card}>
                    <Image className={styles.image} src={military_tech} alt="military_tech" />
                    <br />
                    <h3>ВІЙСЬКОВЕ ПРАВО</h3>
                    <br />
                    <p>оформлення відстрочок, підготовка військових процесуальних документів, вирішення спорів, захист в суді</p>
                </div>
                <div className={styles.card}>
                    <Image className={styles.image} src={handshake} alt="handshake" />
                    <br />
                    <h3>ЦИВІЛЬНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <br />
                    <p>вирішення спорів, укладення договорів тощо</p>
                </div>
                <div className={styles.card}>
                    <Image className={styles.image} src={fact_check} alt="fact_check" />
                    <br />
                    <h3>ГОСПОДАРСЬКЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <br />
                    <p>супровід господарської діяльності, вирішення спорів, процесуальна документація</p>
                </div>
                <div className={styles.card}>
                    <Image className={styles.image} src={diversity_1} alt="diversity_1" />
                    <br />
                    <h3>СІМЕЙНЕ ПРАВО</h3>
                    <br />
                    <p>процес розлучення, призначення аліментів, укладення договорів, шлюбного контракту</p>
                </div>
                <div className={styles.card}>
                    <Image className={styles.image} src={gavel} alt="gavel" />
                    <br />
                    <h3>КРИМІНАЛЬНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <br />
                    <p>супровід на слідчих розшукових діях, захист у суді, формування лінії захисту</p>
                </div>
                <div className={styles.card}>
                    <Image className={styles.image} src={how_to_reg} alt="how_to_reg" />
                    <br />
                    <h3>ВИБОРЧЕ ПРАВО</h3>
                    <br />
                    <p>супровід виборчої компанії, формування стратегії</p>
                </div>
                <div className={styles.card}>
                    <Image className={styles.image} src={balance} alt="balance" />
                    <br />
                    <h3>АДМІНІСТРАТИВНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
                    <br />
                    <p>захист осіб, які притягаються до адміністративної відповідальності, вирішення спорів з органами публічної,
                        державної
                        влади, стягнення коштів з державного бюджету</p>
                </div>
            </div>
            <br />
            <hr />
            <div className={styles.buttonWrapper}>
                <Link href="/" className={styles.button}>
                    Повернутися на головну сторінку
                </Link>
            </div>
        </>
    )
}
