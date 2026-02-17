import React from 'react';
import styles from './partner.module.scss';
import HeaderWrapper from '../headerWrapper';

// Icon paths (update with actual asset paths)
const icons = {
  quality: '/assets/icons/quality.svg',
  immersion: '/assets/icons/immersion.svg',
  turnkey: '/assets/icons/turnkey.svg',
  visual: '/assets/icon_com1.png',
  automation: '/assets/icon_com2.png',
  dev: '/assets/icon_com3.png',
  video: '/assets/icon_com4.png',
  chatbot: '/assets/icon_com5.png',
  custom: '/assets/icons/custom.svg',
  transparency: '/assets/icons/transparency.svg',
};

const Partner = () => (
  <section className={styles.partnerSection}>
    <HeaderWrapper
                 href=""
                 withBr={false}
                 kicker="#Цифры"
                 title="о нас"
                 titleAccent="в цифрах"
               />
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cardNumber}>01</div>
        <div className={styles.cardContent + ' ' + styles.cardContentFirst}>
          <div>
            <h3>КАЧЕСТВО ВАЖНЕЕ КОЛИЧЕСТВА</h3>
            <p>Мы не работаем по принципу конвейера. Для нас важен каждый заказ, и мы подходим к нему с максимальной вовлечённостью и трепетом. Мы сознательно не набираем десятки проектов одновременно, чтобы сохранить фокус.</p>
          </div>
          <div>
            <h3>ГЛУБОКОЕ ПОГРУЖЕНИЕ</h3>
            <p>Мы не используем шаблонные решения. Мы изучаем ваш бизнес изнутри, разбираем процессы на атомы и предлагаем архитектуру, которая нужна именно вам, как если бы строили её для себя.</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardNumber}>02</div>
        <div className={styles.cardContent}>
          <h3>ЗАКРЫВАЕМ ЗАДАЧИ «ПОД КЛЮЧ»</h3>
          <p className='max-w-[600px]'>Мы строим агентство, с которым вам больше не придётся искать других подрядчиков, дизайнеров или программистов. Обратившись в Garantex AI, вы получаете полноценный технический департамент на аутсорсе.</p>
          
        </div>
      </div>
      <div className={styles.competencies}>
        <h4>НАШИ КОМПЕТЕНЦИИ ЗАКРЫВАЮТ ВЕСЬ СПЕКТР ЦИФРОВЫХ ЗАДАЧ:</h4>
        <div className={styles.competencyGrid}>
          <div className={styles.competencyCard}>
            <div className="flex items-center gap-2">
              <img src={icons.visual} alt="Визуал" />
              <span>РАБОТА С ВИЗУАЛОМ</span>
            </div>
            <p>Создание изображений, айдентики и креативов любой сложности с помощью нейросетей.</p>
          </div>
          <div className={styles.competencyCard}>
            <div className="flex items-center gap-2">
              <img src={icons.automation} alt="Автоматизация" />
              <span>СЛОЖНАЯ АВТОМАТИЗАЦИЯ</span>
            </div>
            <p>Внедрение автоматических сценариев любой глубины (Make, n8n, Python) для избавления от рутины.</p>
          </div>
          <div className={styles.competencyCard}>
            <div className="flex items-center gap-2">
              <img src={icons.dev} alt="Веб-разработка" />
              <span>ВАЙБ-КОДИНГ И РАЗРАБОТКА</span>
            </div>
            <p>Быстро создадим сайт, Telegram Mini App или онлайн-магазин, используя современные инструменты генерации и ИИ.</p>
          </div>
          <div className={styles.competencyCard}>
            <div className="flex items-center gap-2">
              <img src={icons.video} alt="Видео" />
              <span>ВИДЕО-ПРОДАКШН ПОЛНОГО ЦИКЛА</span>
            </div>
            <p>От рекламных роликов и видео под маркетплейсы, до мультфильмов и контента для YouTube/Reels.</p>
          </div>
          <div className={styles.competencyCard}>
            <div className="flex items-center gap-2">
              <img src={icons.chatbot} alt="Чат-боты" />
              <span>ЧАТ-БОТЫ И ИИ-АССИСТЕНТЫ</span>
            </div>
            <p>Умные сотрудники поддержки, продвинутые и личные цифровые помощники.</p>
          </div>
          <div className={styles.competencyCard + ' ' + styles.competencyCardCustom}>
            <div className="flex items-center gap-2">
              <span>НЕ НАШЛИ НУЖНОГО В СПИСКЕ?</span>
            </div>
            <p>Просто напишите нам, с чем вам требуется помощь. Если задача решаема цифровыми методами — мы её решим.</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardNumber}>03</div>
        <div className={styles.cardContent}>
          <h3>АБСОЛЮТНАЯ ПРОЗРАЧНОСТЬ</h3>
          <p>Вы всегда видите процесс работы. Никаких «чёрных ящиков» — вы понимаете, за что платите, на каком этапе находится проект и как именно алгоритмы приносят вам пользу.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Partner;
