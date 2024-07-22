import Link from 'next/link';
import styles from "./page.module.css";
import Image from "next/image";

/*
/**|======================================
/**| pics
/**|======================================
*/
import instagram from "@/public/instagram.svg";
import telegram from "@/public/telegram.svg";
import viber from "@/public/viber.svg";
import tiktok from "@/public/tiktok.svg";
import call from "@/public/call.svg";
import mail from "@/public/mail.svg";
import clock from "@/public/clock.svg";
import thumbup from "@/public/thumbup.svg";
import building from "@/public/building.svg";
import contacts from "@/public/contacts.svg";

/*
/**|======================================
/**| code
/**|======================================
*/
export default function Contacts() {
    return (
        <>
            <Image className={styles.maticon} src={contacts} alt="contacts" />
            <h2>НАШІ КОНТАКТИ</h2>
            <br />
            <div className={styles.phoneandmail}>
                <div>
                    <br />
                    <h2>ТЕЛЕФОНУЙТЕ</h2>
                    <br />
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="tel:%2B380935378674">
                            <Image className={styles.maticon} src={call} alt="call" />+38 (093) 537 86 74
                        </a>
                    </div>
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="tel:%2B380679981718">
                            <Image className={styles.maticon} src={call} alt="call" />+38 (067) 998 17 18
                        </a>
                    </div>
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="tel:%2B380673239927">
                            <Image className={styles.maticon} src={call} alt="call" />+38 (067) 323 99 27
                        </a>
                    </div>
                </div>
                <div>
                    <br />
                    <h2>АБО НАПИШІТЬ НАМ</h2>
                    <br />
                    <div className={styles.flexContactlink}>
                        <a className={styles.a} href="mailto:aounicase@gmail.com">
                            <Image className={styles.maticon} src={mail} alt="mail" />на електронну пошту
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <Image className={styles.maticon} src={clock} alt="clock" />
            <br />
            <h2>ЧАС РОБОТИ ОФІСУ</h2>
            <br />
            <p>Пн-Пт: 10:00–18:00</p>
            <p>Вихідні та святкові дні:</p>
            <p>За домовленістю</p>
            <br />
            <Image className={styles.maticon} src={thumbup} alt="thumbup" />
            <h2>МИ В СОЦМЕРЕЖАХ</h2>
            <br />
            <div className={styles.quickaccess}>
                <div>
                    <a href="https://www.instagram.com/aounicase/" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.icon} src={instagram} alt="instagram" />
                    </a>
                </div>
                <div>
                    <a href="https://t.me/+380935378674" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.icon} src={telegram} alt="telegram" />
                    </a>
                </div>
                <div>
                    <a href="viber://add?number=%2B380935378674" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.icon} src={viber} alt="viber" />
                    </a>
                </div>
                <div>
                    <a href="https://www.tiktok.com/@unicase_" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.icon} src={tiktok} alt="tiktok" />
                    </a>
                </div>
            </div>
            <Image className={styles.maticon} src={building} alt="building" />
            <h2>ЯК НАС ЗНАЙТИ?</h2>
            <div className={styles.flexcontacts}>
                <a className={styles.a} href="https://maps.app.goo.gl/Ws6oGK58aTAd3RXn6" target="_blank" rel="noopener noreferrer">
                    <span className="material-icons">location_on</span> м. Київ, проспект Берестейський, 93
                </a>
            </div>
            <br />
            <iframe className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1940224695873!2d30.378006088744385!3d50.456111598348635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd7fded78d39%3A0x225e02813505374e!2z0K7QvdGW0LrQtdC50YE!5e0!3m2!1sen!2sua!4v1716126277381!5m2!1sen!2sua"
                style={{ border: '0.5rem solid #FFD600' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <hr />
            <div className={styles.buttonWrapper}>
                <Link href="/" className={styles.button}>
                    Повернутися на головну сторінку
                </Link>
            </div>
        </>
    )
}
