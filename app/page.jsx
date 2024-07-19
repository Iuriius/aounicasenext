import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';
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

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h2><span className={styles.yellowspan}>УВАГА!</span>
          <br />
          ДОСТУПНІ ПАКЕТИ АДВОКАТСЬКОГО СТРАХУВАННЯ:
        </h2>
        <div className={styles.cardscontainer}>
          <div className={styles.card}>
            <Image className={styles.icon} src={task_alt} alt="task_alt" />
            <h3>ПАКЕТ "СТАРТ"</h3>
            <div className={styles.whitebg}>
              <p>пакет включає 👉 договір про правову допомогу + перша консультація</p>
            </div>
            <b>💰 вартість: 4 000 грн.</b>
            <p>Всі подальші юридичні дії: консультації, виїзди адвоката оплачуються окремо</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={verified_user} alt="verified_user" />
            <h3>ПАКЕТ "ЗАХИСТ"</h3>
            <div className={styles.whitebg}>
              <p>пакет включає 👉 договір про правову допомогу + всі необхідні усні консультації + письмові інструкції з
                оновлення мобілізаційного
                законодавства, гарантії пріоритетного виїзду адвоката</p>
            </div>
            <b>💰 вартість: 25 000 грн./рік</b>
            <p>Написання документів, виїзд адвоката оплачуються окремо</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={local_police} alt="local_police" />
            <h3>ПАКЕТ "ПОВНА ГАРАНТІЯ"</h3>
            <div className={styles.whitebg}>
              <p>пакет включає 👉 договір про правову допомогу + всі необхідні консультації, гарантія пріоритетного виїзду
                адвоката на місце, написання
                процесуальних документів, правовий супровід з мобілізаційних та цивільних справ</p>
            </div>
            <b>💰 вартість: 40 000 грн./рік</b>
            <p>Вартість особистих питань за межами мобілізації узгоджується індивідуально</p>
          </div>
        </div>
        <br />
        {/* < div className = { styles.yt } >
        <iframe className={styles.ytvideo" src="https://www.youtube.com/embed/HMBDl25Jf8k?si=zduCOFAE26wy-LMo"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" loading="lazy" allowfullscreen> </iframe>
      </div>
      <br /> */}
        <div className={styles.note}>
          <p><b>Вартість усної консультації з адвокатом по телефону</b></p>
          <br />
          <p>(без укладання договору та вивчення документів)</p>
          <b>💰 1000 грн.</b>
          <br />
          <p>☎️ номер постійного звʼязку:</p>
          <a href="tel:%2B380935378674">+38 (093) 537 86 74</a>
        </div>
        <br />
        {/* <app-heroswiper /> */}
        <h2>ЗВ'ЯЗАТИСЯ:</h2>
        <div className={styles.quickaccess}>
          <div>
            <a href="tel:%2B380935378674" target="_blank">
              <Image className={styles.icon} src={phone} alt="phone" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/aounicase/" target="_blank">
              <Image className={styles.icon} src={instagram} alt="instagram" />
            </a>
          </div>
          <div>
            <a href="https://t.me/%2B380935378674" target="_blank">
              <Image className={styles.icon} src={telegram} alt="telegram" />
            </a>
          </div>
          <div className={styles.vibermob}>
            <a href="viber://add?number=%2B380935378674" target="_blank">
              <Image className={styles.icon} src={viber} alt="viber" />
            </a>
          </div>
          <div className={styles.viberdesk}>
            <a href="viber://chat?number=%2B380935378674" target="_blank">
              <Image className={styles.icon} src={viber} alt="viber" />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@unicase_" target="_blank">
              <Image className={styles.icon} src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>
        <h2>ОТРИМАЙТЕ ПРАВОВУ ДОПОМОГУ:</h2>
        <div className={styles.cardscontainer}>
          <div className={styles.card}>
            <Image className={styles.icon} src={military_tech} alt="military_tech" />
            <h3>ВІЙСЬКОВЕ ПРАВО</h3>
            <p>оформлення відстрочок, підготовка військових процесуальних документів, вирішення спорів, захист в суді</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={handshake} alt="handshake" />
            <h3>ЦИВІЛЬНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
            <p>вирішення спорів, укладення договорів тощо</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={fact_check} alt="fact_check" />
            <h3>ГОСПОДАРСЬКЕ ПРАВО<br />ТА ПРОЦЕС</h3>
            <p>супровід господарської діяльності, вирішення спорів, процесуальна документація</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={diversity_1} alt="diversity_1" />
            <h3>СІМЕЙНЕ ПРАВО</h3>
            <p>процес розлучення, призначення аліментів, укладення договорів, шлюбного контракту</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={gavel} alt="gavel" />
            <h3>КРИМІНАЛЬНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
            <p>супровід на слідчих розшукових діях, захист у суді, формування лінії захисту</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={how_to_reg} alt="how_to_reg" />
            <h3>ВИБОРЧЕ ПРАВО</h3>
            <p>супровід виборчої компанії, формування стратегії</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.icon} src={balance} alt="balance" />
            <h3>АДМІНІСТРАТИВНЕ ПРАВО<br />ТА ПРОЦЕС</h3>
            <p>захист осіб, які притягаються до адміністративної відповідальності, вирішення спорів з органами публічної,
              державної
              влади, стягнення коштів з державного бюджету</p>
          </div>

        </div >
        <br />
        <div className={styles.phoneandmail}>
          <div>
            <h2>ТЕЛЕФОНУЙТЕ</h2>
            <div className={styles.flex}>
              <a href="tel:%2B380935378674"><Image className={styles.icon} src={call} alt="call" /></a>
            </div>
            <div className={styles.flex}>
              <a href="tel:%2B380679981718"><Image className={styles.icon} src={call} alt="call" /></a>
            </div>
            <div className={styles.flex} >
              <a href="tel:%2B380673239927"><Image className={styles.icon} src={call} alt="call" /></a>
            </div >
          </div >
          <div>
            <h2>АБО НАПИШІТЬ НАМ</h2>
            <div className={styles.flex}>
              <a href="mailto:aounicase@gmail.com"><Image className={styles.icon} src={mail} alt="mail" /></a>
            </div>
          </div >
        </div >

        <br />
        <h2>ПРО АО "ЮНІКЕЙС"</h2>
        <div className={styles.prounicase}>
          <Image className={styles.prounicasepic} src={pronas} alt="unicase" />
          <article>
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
        <h2>ЯК НАС ЗНАЙТИ?</h2>
        <div className={styles.flex}> <a href="https://maps.app.goo.gl/Ws6oGK58aTAd3RXn6"><mat-icon fontIcon="location_on" />м. Київ, проспект Берестейський, 93</a></div >
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1940224695873!2d30.378006088744385!3d50.456111598348635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd7fded78d39%3A0x225e02813505374e!2z0K7QvdGW0LrQtdC50YE!5e0!3m2!1sen!2sua!4v1716126277381!5m2!1sen!2sua"
          style="border:0.5rem solid #FFD600" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <hr className={styles.hr} />
        <div className={styles.buttonWrapper}>
          <Link href="/" className={styles.button}>
            Повернутися наверх
          </Link>
        </div>
      </main >
    </>
  );
}
