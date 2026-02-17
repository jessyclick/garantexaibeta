import HeaderWrapper from '../headerWrapper';
import Image from 'next/image';
import styles from './inNumbers.module.scss';

const stats = [
  {
    icon: '/assets/icon_about-1.png',
    title: 'ИЗУЧАЕМ ИИ С 2023 ГОДА',
    description: 'Начали с экспериментов, в 2024 выросли в полноценное AI-агентство, которое решает задачи “Под ключ”.',
  },
  {
    icon: '/assets/icon_about-2.png',
    title: '50+ КЕЙСОВ',
    description: 'Реализовали проекты разной сложности — от генерации креативов до построения бизнес-автоматизаций под ключ.',
  },
  {
    icon: '/assets/icon_about-3.png',
    title: '15+ НАПРАВЛЕНИЙ',
    description: 'Видео-продакшн, SEO, авто-SMM, CRM-интеграции, Чат-боты, ИИ-Ассистенты, ИИ-Аватары, Озвучка, Перевод видео.',
  },
  {
    icon: '/assets/icon_about-4.png',
    title: '8 ЭКСПЕРТОВ',
    description: 'У нас большая команда, каждый профессионал своего направления, мы работаем быстро и четко.',
  },
  {
    icon: '/assets/icon_about-5.png',
    title: '750+ УЧАСТНИКОВ',
    description: 'В нашем Telegram-комьюнити (органический рост без вложений в рекламу).',
  },
];

const InNumbers = () => (
  <section className={styles.inNumbersSection}>
    <div className={styles.container}>
        <HeaderWrapper
             href=""
             withBr={false}
             kicker="#Цифры"
             title="о нас"
             titleAccent="в цифрах"
           />
    <div className={styles.statsGrid}>
      {stats.map((stat, idx) => (
        <div key={idx} className={styles.statCard}>
        <div className="flex items-center gap-4">
<Image src={stat.icon} alt={stat.title} width={48} height={48} />
          <h3>{stat.title}</h3>
        </div>
          
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
    </div>
   
  </section>
);

export default InNumbers;
