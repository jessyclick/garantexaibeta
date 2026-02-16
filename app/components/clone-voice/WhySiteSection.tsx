import { span } from "motion/react-client";
import HeaderWrapper from "../headerWrapper";
import styles from "../socmedia/whySite.module.scss";

interface ReasonCard {
  icon: string;
  title: string;
  description: string;
}

const reasonsData: ReasonCard[] = [
  {
    icon: "/assets/icon_d-1.png",
    title: "1000+ голосов:",
    description:
      'мужские, женские, детские; от блогерской подачи до трейлерного диктора.',
  },
  {
    icon: "/assets/icon_d-2.png",
    title: "Клонирование голоса за 30 секунд:",
    description:
      "цифровая модель остаётся вашей навсегда.",
  },
  {
    icon: "/assets/icon_d-3.png",
    title: "Мультиязычность:",
    description:
      "ваш голос говорит на английском, испанском или японском.",
  },
  {
    icon: "/assets/icon_d-4.png",
    title: "Эмоциональный контроль:",
    description:
      "радость, грусть, ярость, шёпот — выбирайте настроение подачи.",
  },
];

export default function WhySiteSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HeaderWrapper
          href="#"
          withBr={true}
          kicker="#Что вы получаете"
          title={<span>Ваша личная студия звукозаписи </span>}
          titleAccent={<span className="color-white">— прямо в Telegram</span>}
        />

        <div className="flex items-center w-full justify-center">
          <p className={styles.underText}>Мы упростили процесс озвучки до одного запроса в боте.</p>
        </div>

        <div className={styles.grid}>
          {reasonsData.map((reason) => (
            <article key={reason.title} className={styles.card}>
              <div className={styles.badge}>
                <img src={reason.icon} alt={reason.title} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
