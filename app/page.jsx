import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Swiper from "../components/swiper/page"
import { YouTubeEmbed } from '@next/third-parties/google'
/*
/**|======================================
/**| pics
/**|======================================
*/
import pronas from "@/public/pronas.webp"
import phone from "@/public/phone.svg"
import instagram from "@/public/instagram.svg"
import telegram from "@/public/telegram.svg"
import viber from "@/public/viber.svg"
import tiktok from "@/public/tiktok.svg"
import verified_user from "@/public/verified_user.svg"
import task_alt from "@/public/task_alt.svg"
import military_tech from "@/public/military_tech.svg"
import mail from "@/public/mail.svg"
import local_police from "@/public/local_police.svg"
import how_to_reg from "@/public/how_to_reg.svg"
import handshake from "@/public/handshake.svg"
import gavel from "@/public/gavel.svg"
import fact_check from "@/public/fact_check.svg"
import diversity_1 from "@/public/diversity_1.svg"
import call from "@/public/call.svg"
import balance from "@/public/balance.svg"
import location_on from "@/public/location_on.svg"

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <br />
        <div className={styles.banner}>
          <p><b>Реєстрація</b></p>
          <p><b>ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ та БЛАГОДІЙНИХ ФОНДІВ</b></p>
          <br />
          <p>послуга включає:</p>
          <p>👉 підготовку всіх необхідних документів: довіреності, протоколів, заяв, статуту</p>
          <b>💰вартість: 15 000 грн.</b>
          <br />
          <br />
          <p>👨‍💼У вартість входить виїзд адвоката та гарантія позитивного результату ✅</p>
        </div>
        <br />
        <h2><span className={styles.yellowspan}>УВАГА!</span>
          <br />
          ДОСТУПНІ ПАКЕТИ АДВОКАТСЬКОГО СТРАХУВАННЯ:
        </h2>
        <br />
        <div className={styles.cardscontainer}>
          <div className={styles.card}>
            <Image className={styles.image} src={task_alt} alt="task_alt" />
            <br />
            <h3>ПАКЕТ "СТАРТ"</h3>
            <br />
            <div className={styles.whitebg}>
              <p>пакет включає 👉 договір про правову допомогу + перша консультація</p>
            </div>
            <br />
            <b>💰 вартість: 4 000 грн.</b>
            <br />
            <p>Всі подальші юридичні дії: консультації, виїзди адвоката оплачуються окремо</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.image} src={verified_user} alt="verified_user" />
            <br />
            <h3>ПАКЕТ "ЗАХИСТ"</h3>
            <br />
            <div className={styles.whitebg}>
              <p>пакет включає 👉 договір про правову допомогу + всі необхідні усні консультації + письмові інструкції з
                оновлення мобілізаційного
                законодавства, гарантії пріоритетного виїзду адвоката</p>
            </div>
            <br />
            <b>💰 вартість: 25 000 грн./рік</b>
            <br />
            <p>Написання документів, виїзд адвоката оплачуються окремо</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.image} src={local_police} alt="local_police" />
            <br />
            <h3>ПАКЕТ "ГАРАНТІЯ"</h3>
            <br />
            <div className={styles.whitebg}>
              <p>пакет включає 👉 договір про правову допомогу + всі необхідні консультації, гарантія пріоритетного виїзду
                адвоката на місце, написання
                процесуальних документів, правовий супровід з мобілізаційних та цивільних справ</p>
            </div>
            <br />
            <b>💰 вартість: 40 000 грн./рік</b>
            <br />
            <p>Вартість особистих питань за межами мобілізації узгоджується індивідуально</p>
          </div>
        </div>
        <br />
        <div className={styles.note}>
          <p><b>Вартість усної консультації з адвокатом по телефону:</b></p>
          <br />
          <p>(без укладання договору та вивчення документів)</p>
          <br />
          <b>💰 1000 грн.</b>
          <br />
          <br />
          <p>☎️ номер постійного звʼязку:</p>
          <br />
          <a className={styles.a} href="tel:%2B380935378674">+38 (093) 537 86 74</a>
        </div>
        <br />
        <div className={styles.ytcontainer}>
          <YouTubeEmbed className={styles.ytvideo}
            videoid="Hvk9rdjbzas"
            params="accelerometer=1&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1"
            style={{ referrerPolicy: 'strict-origin-when-cross-origin' }}
          />
        </div>
        <br />
        <div className={styles.note2}>
          <p><b>Оскарження штрафів ТЦК:</b></p>
          <br />
          <p>ознайомлення з матеріалами справи</p>
          <b>💰 4000 грн.</b>
          <br />
          <br />
          <p>формування позиції та написання клопотання</p>
          <b>💰 4000 грн.</b>
        </div>
        <br />
        <Swiper />
        <br />
        <h2>ЗВ'ЯЗАТИСЯ:</h2>
        <br />
        <div className={styles.quickaccess}>
          <div>
            <a href="tel:+380935378674" target="_blank">
              <Image className={styles.icon} src={phone} alt="phone" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/aounicase/" target="_blank">
              <Image className={styles.icon} src={instagram} alt="instagram" />
            </a>
          </div>
          <div>
            <a href="https://t.me/+380935378674" target="_blank">
              <Image className={styles.icon} src={telegram} alt="telegram" />
            </a>
          </div>
          <div>
            <a href="viber://add?number=%2B380935378674" target="_blank">
              <Image className={styles.icon} src={viber} alt="viber" />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@aounicase" target="_blank">
              <Image className={styles.icon} src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>
        <h2>ОТРИМАЙТЕ ПРАВОВУ ДОПОМОГУ:</h2>
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

        </div >
        <br />
        <div className={styles.phoneandmail}>
          <div>
            <br />
            <h2>ТЕЛЕФОНУЙТЕ</h2>
            <br />
            <div className={styles.flex}>
              <a className={styles.a} href="tel:+380935378674"><Image className={styles.image} src={call} alt="call" />+38 (093) 537 86 74</a>
            </div>
            <div className={styles.flex}>
              <a className={styles.a} href="tel:+380730774072"><Image className={styles.image} src={call} alt="call" />+38 (073) 077 40 72</a>
            </div>
            <div className={styles.flex}>
              <a className={styles.a} href="tel:+380679981718"><Image className={styles.image} src={call} alt="call" />+38 (067) 998 17 18</a>
            </div>
            <div className={styles.flex} >
              <a className={styles.a} href="tel:+380673239927"><Image className={styles.image} src={call} alt="call" />+38 (067) 323 99 27</a>
            </div >
          </div >
          <div>
            <br />
            <h2>АБО НАПИШІТЬ НАМ</h2>
            <br />
            <div className={styles.flex}>
              <a className={styles.a} href="mailto:aounicase@gmail.com"><Image className={styles.image} src={mail} alt="mail" />на електронну пошту</a>
            </div>
          </div >
        </div >

        <br />
        <h2>ПРО АО "ЮНІКЕЙС"</h2>
        <br />
        <div className={styles.prounicase}>
          <Image className={styles.prounicasepic} src={pronas} alt="unicase" />
          <article className={styles.article}>
            <a className={styles.articlelink} href="/ourteam"><strong>Наші експерти – </strong></a>володіють глибокими
            теоретичними заннями та практичним досвідом у багатьох галузях
            юриспруденції.<br />Ми ретельно аналізуємо кожну справу, надаючи індивідуальний підхід до кожного клієнта, щоб
            забезпечити найкращий можливий результат. Це дозволяє нам розробити найбільш ефективну стратегію для вирішення
            питань наших клієнтів.<br /><a className={styles.articlelink} href="/cases"><strong>Наша мета – </strong></a>
            не            просто
            вирішувати ваші правові проблеми, але і
            забезпечувати
            вам відчуття спокою та впевненості в майбутньому.
          </article>
        </div>
        <br />
        <Image className={styles.image} src={location_on} alt="location_on" />
        <h2>ЯК НАС ЗНАЙТИ?</h2>
        <br />
        <div className={styles.flex}> <a className={styles.a} href="https://maps.app.goo.gl/Ws6oGK58aTAd3RXn6">
          м. Київ, проспект Берестейський, 93</a></div >
        <br />
        <iframe
          className={styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1940224695873!2d30.378006088744385!3d50.456111598348635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd7fded78d39%3A0x225e02813505374e!2z0K7QvdGW0LrQtdC50YE!5e0!3m2!1sen!2sua!4v1716126277381!5m2!1sen!2sua" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <br />
        <hr />
        <br />
        <br />
        <div className={styles.buttonWrapper}>
          <Link href="/" className={styles.button}>
            Повернутися наверх
          </Link>
        </div>
        <br />
        <br />
      </main >
    </>
  );
}
