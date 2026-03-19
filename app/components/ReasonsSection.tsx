import styles from "./styles/reasons.module.scss";
import { RevealStagger } from "./revealStagger";
import { Reveal } from "./reveal";

export default function ReasonsSection() {
  return (
    <section className="py-30">
      <div className="max-w-[1300px] mx-auto">
        <Reveal> 
        <div className={styles.header}>
          <span className={styles.kicker}>#Проблема</span>
          <h2 className={styles.title}>
            ПОЧЕМУ ОБЫЧНЫЕ ФОТО
            <br />
            <span className={styles.accent}>БОЛЬШЕ НЕ ПРОДАЮТ?</span>
          </h2>
        </div>
        </Reveal>

        
          <RevealStagger stagger={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"> 
          <article className="text-center flex flex-col items-center gap-4 h-full grayGradient p-6 rounded-[24px]">
            <div className="w-10">
              <img src="/assets/icon_cloose.png" alt="" />
            </div>
            <p className="font-inter text-custom-19">
              Серый фон и скучная статика «убивают» конверсию. Покупатель хочет
              видеть динамику, эмоции и товар в жизни.
            </p>
          </article>

          <article className="text-center flex flex-col items-center gap-4 h-full borderGradient GradientBlackGreen p-6 rounded-[24px] shadow-[0_0.7px_24px_0_rgba(68,196,161,0.31)]">
            <div className="w-10">
              <img src="/assets/icon_like.png" alt="" />
            </div>
            <p className="font-inter text-custom-19 font-bold text-[#44C4A1]">
              Сегодня Garantex AI делает это за минуты, используя только фото
              вашего товара.
            </p>
          </article>

          <article className="text-center flex flex-col items-center gap-4 h-full grayGradient p-6 rounded-[24px]">
            <div className="w-10">
              <img src="/assets/icon_cloose.png" alt="" />
            </div>
            <p className="font-inter text-custom-19">
              Раньше для этого требовались: студия, фотограф, модели, визажист.
            </p>
          </article>
          </RevealStagger>
        
      </div>
    </section>
  );
}
