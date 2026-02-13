import React from "react";
import HeaderWrapper from "../headerWrapper";
import styles from "./premium.module.scss";

type Props = {
  id?: string;
};

type BenefitItem = {
  // Use React.ReactNode so it can accept both <img> and <svg>
  icon: React.ReactNode; 
  title: string;
};

export default function PremiumSection({ id }: Props) {
  const benefits: BenefitItem[] = [
    {
      // Wrapped in an img tag to match the ReactNode type
      icon: <img src="/assets/icon_res-1.png" alt="" />, 
      title: "Постоянный поток контента для всех соцсетей",
    },
    {
      icon: <img src="/assets/icon_res-2.png" alt="" />,
      title: "Рост охвата, вовлечённости и доверия к бренду",
    },
    {
      icon: <img src="/assets/icon_res-3.png" alt="" />,
      title: "Экономию бюджета до 10 раз",
    },
    {
      icon: <img src="/assets/icon_res-4.png" alt="" />,
      title: "Полное ведение соцсетей без сотрудников",
    },
    {
      icon: <img src="/assets/icon_res-5.png" alt="" />,
      title: "Автоматическую публикацию 24/7",
    },
  ];

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <div className={styles.imagePlaceholder}>
                <img src="/assets/res.png" alt="Premium" className={styles.premiumImage} />
              </div>
            </div>

            <div className={styles.benefitsSection}>
              <HeaderWrapper
                kicker={<span>#Результат</span>}
                title={<span>ЧТО,</span>}
                titleAccent={<span className="color-white">вы ПОЛУЧАЕТЕ</span>}
                align="left"
                withBr={false}
              />

              <div className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      {/* Render the icon directly since it's already a React element */}
                      {benefit.icon}
                    </div>
                    <p className={styles.benefitTitle}>{benefit.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}