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
          <div className={styles.titleWrapper}>
            <img src="/assets/icon_grom.png" alt="" />
            <h3 className={styles.columnTitle}>Услуги и продукты</h3>
            </div>

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

          <div className={styles.titleWrapper}>
            <img src="/assets/icon_team.png" alt="" />
            <h3 className={styles.columnTitle}>Для кого работаем</h3>
            </div>

          <ul className={styles.checkList}>
            <li>✓ Малый и средний бизнес</li>
            <li>✓ Эксперты и блогеры</li>
            <li>✓ Маркетинговые агентства</li>
            <li>✓ Онлайн-школы и инфобизнес</li>
            <li>✓ Магазины на маркетплейсах</li>
            <li>✓ E-commerce</li>
          </ul>

          <div className={styles.alwaysOpen}>
            <span className={styles.openIcon}>
              <img src="/assets/icon_footer-star.png" alt="" />
            </span>
            
              <h4>Мы всегда открыты</h4>
              <p>Для всех, кто хочет стать продуктивней, посвятить себя действительно важным интеллектуальным задачам и свободить время, делегировав рутину алгоритмам.</p>
            
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <img src="/assets/footer-logo.png" alt="" />
          </div>

          <p className={styles.logoDescription}>
            <strong>🚀 AI-Агентство полного цикла для бизнеса</strong>
            <br/>
            Вы добиваете поддержник и верный друг в мире искусственного интеллекта.
          </p>

          <h3 className={styles.columnTitle}>СВЯЗЬ И ПОДДЕРЖКА</h3>

          <div className={styles.contactBlock}>
            <a href="mailto:garantexai@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <img src="/assets/icon_mail.png" alt="" />
              </span>
              garantexai@gmail.com
            </a>
            <a href="https://twitter.com/Garantex_ai" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <img src="/assets/icon_telegram.png" alt="" />
              </span>
              @Garantex_ai
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <img src="/assets/icon_time.png" alt="" />
              </span>
              08:00 – 22:00 (МСК)
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <img src="/assets/icon_calendar.png" alt="" />
              </span>
              БЕЗ ВЫХОДНЫХ (Понедельник — Воскресенье)
            </div>
            
          </div>

          <button className={styles.consultButton}>
            Обсудить проект
            <span className={styles.consultSubtext}>(Бесплатная консультация)</span>
          </button>
        </div>
      </div>

      {/* Legal Section */}

      <div className={styles.legalSection}>
        <div className={styles.legalGrid}>
          <div className={`${styles.legalBlock} ${styles.highlightLeft}`}>
            <div className={styles.blockIcon}>
              <img src="/assets/icon_add-footer.png" alt="" />
            </div>
            <div className={styles.blockContent}>
              <h4 className={styles.blockTitle}>Сохранить проект в папку телеграмм</h4>
              <p className={styles.blockSubtitle}>(Подписка на всю экосистему)</p>
            </div>
          </div>

          <div className={`${styles.legalBlock} ${styles.highlightCenter}`}>
            <div className={styles.blockIcon}>
              <img src="/assets/icon_green.png" alt="" />
            </div>
            <div className={styles.blockContent}>
              <h4 className={styles.blockTitle}>Оказываем услуги официально по договору</h4>
              <p className={styles.blockSubtitle}>Более 50 реализованных проектов.</p>
            </div>
          </div>

          <div className={`${styles.legalBlock} ${styles.highlightRight}`}>
            <div className={styles.legalDataTitle}>ЮРИДИЧЕСКИЕ ДАННЫЕ</div>
            <div className={styles.legalNumbers}>
              <div><strong>ИНН:</strong> 780732984377</div>
              <div><strong>ОГРН/ОГРНИП:</strong> 323784700302365</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className={styles.techStackSection}>
        <div className={styles.techStackLabel}>НАШ ТЕХНИЧЕСКИЙ СТЕК:</div>
        <div className={styles.techStack}>
            <div className={styles.techStackLinear}></div>
            <div className={`${styles.techStackLinear} ${styles.LinearRight}`}></div>
            <span>Automation</span>
            <span>Make</span>
            <span>N8N</span>
            <span>VIBE CODING</span>
            <span>Cursor</span>
            <span>AI Studio</span>
            <span>V0</span>
            <span>Python</span>
            <span>📺 ВИДЕО</span>
            <span>Sora 2</span>
            <span>Veo 3</span>
            <span>RunWay</span>
            <span>Kling</span>
            <span>Pika</span>
        </div>
      </div>
    </footer>
  );
}
