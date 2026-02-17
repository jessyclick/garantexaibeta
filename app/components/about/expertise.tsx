import HeaderWrapper from '../headerWrapper';
import Image from 'next/image';
import styles from './expertise.module.scss';

const expertiseData = [
  {
    icon: '/assets/icon_ab-1.png',
    title: 'СПИКЕРСТВО',
    description: 'Мы регулярно представляем индустрию на профильных конференциях (офлайн и онлайн). Делимся не сухой теорией, а реальными кейсами, которые наша команда реализует «в полях».',
    button: null,
  },
  {
    icon: '/assets/icon_ab-2.png',
    title: 'YOUTUBE И МЕДИА',
    description: 'Мы создаем качественный образовательный контент. Снимаем обзоры инструментов и обучающие ролики, чтобы вы могли бесплатно повышать свою квалификацию.',
    button: null,
  },
  {
    icon: '/assets/icon_ab-3.png',
    title: 'ПАРТНЕРЫ НАЦПРОЕКТА «МОЙ БИЗНЕС»',
    description: 'Мы помогаем предпринимателям переходить на «цифровые рельсы» на федеральном уровне. Команда Garantex AI подготавливала методические материалы для государственных образовательных программ.',
    button: 'Подробнее',
  },
  {
    icon: '/assets/icon_ab-4.png',
    title: 'ОБУЧЕНИЕ',
    description: 'Мы разработали техническую систему и контент для трехдневного интенсива по нейросетям для новичков, где выступили в роли ведущих экспертов, проведя участников от теории к результату.',
    button: 'Подробнее',
  },
];

const Expertise = () => (
  <section className={styles.expertiseSection}>
    <div className={styles.container}>
         <HeaderWrapper
                 href=""
                 withBr={false}
                 kicker="#Экспертиза"
                 title="Мы формируем стандарты "
                 titleAccent="рынка ИИ "
               />
    <div className={styles.description}>
      <span className={styles.brand}>Garantex AI</span> — это не “ноунейм” разработчики-фрилансеры. Мы — публичные эксперты, которые формируют культуру использования ИИ в бизнесе. Наша цель — создать среду, где доступ к сложным знаниям становится <span className={styles.accent}>простым и понятным</span>.
    </div>
    <div className={styles.grid}>
      {expertiseData.map((item, idx) => (
        <div className={styles.card} key={idx}>
            <div className="flex items-center gap-4">
                <Image src={item.icon} alt={item.title} width={40} height={40} />
                <h3>{item.title}</h3>
            </div>
          
          <p>{item.description}</p>
          {item.button && (
            <button className={styles.button}>
                <p>{item.button}</p> 
                </button>
          )}
        </div>
      ))}
    </div>
    </div>
   
  </section>
);

export default Expertise;
