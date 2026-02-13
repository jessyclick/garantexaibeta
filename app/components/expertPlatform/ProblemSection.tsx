import styles from "./Problem.module.scss";
import HeaderWrapper from "../headerWrapper";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  img: string; // 1. Добавили поле в тип
};

type Props = {
  cards?: CardProps[];
};

const defaultCards: CardProps[] = [
  {
    icon: "🚨",
    title: "ДОРОГОЙ ШТАТ:",
    img: "/assets/problem-1.png",
    description: "Хороший редактор + копирайтер + дистрибьютор обходятся в 150,000+ ₽/мес.",
  },
  {
    icon: "⚡",
    title: "ХАОС И ПРОСТОЙ:",
    img: "/assets/problem-2.png",
    description: "Творческие кризисы, болезни, долгие согласования. Статьи выходят раз в месяц и не приносят результата.",
  },
  {
    icon: "📋",
    title: "РАБОТА «В СТОЛ»:",
    img: "/assets/problem-3.png",
    description: "Вы написали крутую статью для сайта, но её никто не увидел. А на адаптацию под VC или Habr нет времени.",
  },
  {
    icon: "🔧",
    title: "СЛОЖНЫЕ АЛГОРИТМЫ:",
    img: "/assets/problem-4.png",
    description: "Текст, который завел в Дзене, могут заминусовать на Хабре, если не знать специфику площадки.",
  },
];

export default function WhyDropBlogsSection({ cards = defaultCards }: Props) {
  return (
    <section className={styles.whyDropBlogs}>
      <div className={styles.container}>
        <HeaderWrapper
          kicker="#Проблема"
          title="ПОЧЕМУ 80% КОМПАНИЙ"
          titleAccent="БРОСАЮТ ВЕСТИ БЛОГИ?"
        />

        <p className={styles.subtitle}>
          <span>Контент-маркетинг — это золото,</span>  но добывать его вручную слишком дорого и сложно
        </p>

        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                
                <img src="/assets/icon_dislike.png" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
              <div className={styles.cardImageWrapper}>
                <img src={card.img} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}