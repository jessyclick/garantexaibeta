import Link from "next/link";
import styles from "./styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.column}>
           <div className={styles.titleWrapper}>
            <img src="/assets/icon_shest.png" alt="" />
            <h3 className={styles.columnTitle}>COMPLEX AI</h3>
            </div>
          
          <p className={styles.columnSubtitle}>Нейро-комплиментом</p>

          <ul className={styles.featureList}>
            <li>
              <img src="/assets/icon_bot.png" alt="" /> Бот чтобы разобраться
            </li>
            <li>
              <img src="/assets/icon_chat.png" alt="" /> Чат для нетворкинга
            </li>
            <li>
              <img src="/assets/icon_plane.png" alt="" /> Основной канал
            </li>
            <li>
              <img src="/assets/icon_doc.png" alt="" /> База знаний
            </li>
          </ul>
            <p className={styles.feautureDescription}>
              Все необходимое для работы и изучения нейросетей в 1 месте
            </p>
          <div className={styles.descriptionBox}>
            <p>
              Регулярные онлайн-встречи, записи эфиров, шаблоны make и n8n, промты и гайды. Актуальные новости, полезные нейросети 
и библиотека из 200+ ресурсов.
            </p>
          </div>
                      <p className={styles.feautureDescription}>
              Все это доступно бесплатно, без подписок и закрытых каналов!
            </p>
        </div>

        {/* Center Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>⚡ УСЛУГИ И ПРОДУКТЫ</h3>

          <ul className={styles.servicesList}>
            <li>ИИ-Аватар (цифровой дворник)</li>
            <li>Для маркетплейсов и e-commerce</li>
            <li>Автоматизация SEO продвижения</li>
            <li>Ведение соц. сетей</li>
            <li>Ведение медиа-платформ</li>
            <li>Автоматизация новостей</li>
            <li>Перевод видео</li>
            <li>Озвучка и клонирование голоса</li>
            <li>3D-Персонажи для бизнеса</li>
          </ul>
        </div>

        <div className={styles.column}>

          <h3 className={styles.columnTitle}>👥 ДЛЯ КОГО РАБОТАЕМ</h3>

          <ul className={styles.checkList}>
            <li>✓ Малый и средний бизнес</li>
            <li>✓ Эксперты и блогеры</li>
            <li>✓ Маркетинговые агентства</li>
            <li>✓ Онлайн-школы и инфобизнес</li>
            <li>✓ Магазины на маркетплейсах</li>
            <li>✓ E-commerce</li>
          </ul>

          <div className={styles.alwaysOpen}>
            <span className={styles.openIcon}>🔓</span>
            <div>
              <h4>Мы всегда открыты</h4>
              <p>Для всех, кто хочет стать продуктивней, посвятить себя действительно важным интеллектуальным задачам и свободить время, делегировав рутину алгоритмам.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29" stroke="#FF9C1C" strokeWidth="2"/>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#FF9C1C" fontSize="24" fontWeight="bold">🚀</text>
            </svg>
            <h2 className={styles.logoBrand}>GARANTEXAI</h2>
          </div>

          <p className={styles.logoDescription}>
            🚀 AI-Агентство полного цикла для бизнеса<br/>
            Вы добиваете поддержник и верный друг в мире искусственного интеллекта.
          </p>

          <h3 className={styles.columnTitle}>СВЯЗЬ И ПОДДЕРЖКА</h3>

          <div className={styles.contactBlock}>
            <a href="mailto:garantexai@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              garantexai@gmail.com
            </a>
            <a href="https://twitter.com/Garantex_ai" className={styles.contactItem}>
              <span className={styles.contactIcon}>🐦</span>
              @Garantex_ai
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>⏰</span>
              08:00 – 22:00 (МСК)
            </div>
          </div>

          <button className={styles.consultButton}>
            ✨ Обсудить проект
            <span className={styles.consultSubtext}>(бесплатная консультация)</span>
          </button>
        </div>
      </div>

      {/* Legal Section */}
      <div className={styles.legalSection}>
        <div className={styles.legalContent}>
          <div className={styles.legalBlock}>
            <h4>ЮРИДИЧЕСКИЕ ДАННЫЕ</h4>
            <p>ИНН: 7807328843770</p>
            <p>ОГРН/ОГРИП: 3237847003023665</p>
          </div>

          <div className={styles.linkBlock}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/offer">Договор оферты</Link>
            <Link href="/sitemap">Карта сайта</Link>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2023-2026 GarantexAI. ВСЕ ПРАВА ЗАЩИЩЕНЫ<br/>
          Агентству ИИ, разработка ИИ-решений для бизнес процессов.
        </div>
      </div>

      {/* Tech Stack */}
      <div className={styles.techStackSection}>
        <div className={styles.techStackLabel}>НАШ ТЕХНИЧЕСКИЙ СТЕК:</div>
        <div className={styles.techStack}>
+          <span>Automation</span>
+          <span>Make</span>
+          <span>N8N</span>
+          <span>VIBE CODING</span>
+          <span>Cursor</span>
+          <span>AI Studio</span>
+          <span>V0</span>
+          <span>Python</span>
+          <span>📺 ВИДЕО</span>
+          <span>Sora 2</span>
+          <span>Veo 3</span>
+          <span>RunWay</span>
+          <span>Kling</span>
+          <span>Pika</span>
        </div>
      </div>
    </footer>
  );
}
