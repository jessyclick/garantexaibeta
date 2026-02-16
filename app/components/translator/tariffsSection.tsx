import Image, { StaticImageData } from "next/image";
import HeaderWrapper from "../headerWrapper";
import styles from "./tariffsSection.module.scss";

// Предположим, вы импортируете иконки локально
// import AudioIcon from "@/public/icons/audio.svg";
// import VideoIcon from "@/public/icons/video.svg";
// import BotIcon from "@/public/icons/bot.svg";

type PricingTier = {
  label: string;
  icon: string | StaticImageData; // Теперь принимает путь или импортированный объект
  description: string;
  class: string;
  pricing: {
    duration: string;
    price: number;
    unit?: string;
    mainPrice?: boolean;
  }[];
  features: string[];
  mainLabel?: string;
  buttonLabel: string;
};

type Props = {
  tariffs?: PricingTier[];
};

const defaultTariffs: PricingTier[] = [
  {
    label: "ПЕРЕВОД АУДИО",
    icon: "/assets/icon_pp1.png", // Путь к картинке в папке public
    description: "Идеально для подкастов, дикторских дорожек, лекций.",
    class: "firstGradient",
    pricing: [
      { duration: "1 минута", price: 750, unit: "₽" },
      { duration: "1-5 минут", price: 500, unit: "₽ / сек" },
      { duration: "От 5 минут", price: 350, unit: "₽ / сек" },
    ],
    features: [
      "ИИ-перевод с адаптацией смысла",
      "Очистка шумов, нормализация",
      "Озвучка клонированным голосом",
    ],
    buttonLabel: "Выбрать",
  },
  {
    label: "ПЕРЕВОД ВИДЕО",
    icon: "/assets/icon_pp2.png",
    description: "Полная локализация видео: перевод → озвучка → подготовка.",
    class: "secondGradient",
    pricing: [
      { duration: "1 минута", price: 1000, unit: "₽" },
      { duration: "1-5 минут", price: 750, unit: "₽ / сек" },
      { duration: "От 5 минут", price: 500, unit: "₽ / сек" },
    ],
    features: [
      "Перевод и адаптация под контекст",
      "Озвучка клонированным голосом",
      "Полная подготовка к публикации",
    ],
    buttonLabel: "Выбрать",
  },
  {
    label: "TG BOT",
    icon: "/assets/icon_pp3.png",
    description: "Собственный Telegram-бот для полной локализации в один клик.",
    class: "thirdGradient",
    pricing: [
      { duration: "Подключение", price: 25000, unit: "₽", mainPrice: true },
    ],
    mainLabel: "разово",
    features: [
      "Загрузка видео/аудио",
      "Выбор языка перевода",
      "Автопубликация на канал",
    ],
    buttonLabel: "Выбрать",
  },
];

export default function TariffsSection({ tariffs = defaultTariffs }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.background} />

      <div className={styles.container}>
        <HeaderWrapper
          kicker="#тарифы"
          title="ТАРИФЫ И УСЛУГИ"
          titleAccent="GARANTEX AI"
        />

        <div className={styles.cardsGrid}>
          {tariffs.map((tariff, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                index === 1 ? styles.cardHighlighted : ""
              } ${tariff.class}`}
            >
              <div className={styles.cardHeader}>
                {/* Рендерим иконку как изображение */}
                <div className={styles.iconWrapper}>
                  <Image 
                    src={tariff.icon} 
                    alt={tariff.label} 
                    width={40} 
                    height={40} 
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.cardTitle}>{tariff.label}</h3>
              </div>

              <p className={styles.cardDescription}>{tariff.description}</p>

              <div className={styles.pricingList}>
                {tariff.pricing.map((tier, tierIndex) => (
                  <div key={tierIndex} className={styles.pricingRow}>
                    <span className={styles.duration}>{tier.duration}</span>
                    <div className={styles.priceWrapper}>
                      <span className={tier.mainPrice ? styles.mainPrice : styles.price}>
                        {tier.mainPrice ? 'ОТ ' : ''}
                        {tier.price.toLocaleString("ru-RU")} {tier.unit}
                      </span>
                      {tariff.mainLabel && (
                        <span className={styles.label}>{tariff.mainLabel}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.featuresDivider} />

              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>ЧТО ВХОДИТ:</h4>
                <ul className={styles.featuresList}>
                  {tariff.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={styles.selectButton}>
                {tariff.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}