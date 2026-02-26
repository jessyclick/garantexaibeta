import React from 'react';
import HeaderWrapper from '../headerWrapper';

const RealCases = () => {
  return (
    <section className="pt-[60px] pb-[80px] text-white text-center">
      <div className="max-w-[1300px] mx-auto">
        <HeaderWrapper
          align="center"
          withBr={false}
          href=""
          kicker="#Реальные кейсы"
          title="Где уже работают"
          titleAccent=" цифровые сотрудники?"
        />
        
        <div className="flex justify-center gap-[40px] mt-[40px] flex-wrap max-[1100px]:flex-col max-[1100px]:items-center max-[1100px]:gap-[28px]">
          
          {/* PUMPY */}
          <div className="GradientBlack rounded-[18px] pt-[32px] px-[28px] pb-[28px] max-w-[340px] min-w-[260px] flex flex-col items-center relative max-[1100px]:max-w-[95vw] max-[1100px]:min-w-0">
            <h3 className="text-white text-center font-['Bebas_Neue'] text-[42px] font-normal leading-normal mb-[12px] tracking-[0.01em]">
              PUMPY<br />
              <span className="block font-['Inter'] text-[19px] font-normal leading-[22px]">КРИПТО-СЕРВИС</span>
            </h3>
            <div className="flex flex-col gap-[16px] text-left text-white font-['Inter'] text-[15px] leading-relaxed">
              <div>
                <b>ЗАДАЧА</b><br />
                Превратить статичного маскота в вертикальный промо-ролик с озвучкой.
              </div>
              <div>
                <b>ЧТО СДЕЛАНО</b>
                <ol className="list-decimal pl-[20px] mt-[4px] space-y-[4px]">
                  <li>Сюжет из 3 сцен: триггер → запрос → сервис</li>
                  <li>Анимация + синхронизация губ (англ.)</li>
                  <li>Субтитры, музыка, монтаж в CapCut</li>
                </ol>
              </div>
              <div className=" text-[#222] rounded-[14px] py-[14px] px-[18px] text-[1.08rem] font-semibold mt-[10px] text-center flex flex-col justify-center bg-[linear-gradient(106deg,_#FF9C1C_5.27%,_#FFCB78_22.82%,_#FF9C1C_75.97%,_#FFCB78_93.14%,_#FF9C1C_108.83%)]">
                Результат: 
Рост доверия в агрессивной нише
              </div>
            </div>
          </div>

          {/* VOVE.APP */}
          <div className="GradientBlack rounded-[18px] pt-[32px] px-[28px] pb-[28px] max-w-[340px] min-w-[260px] flex flex-col items-center relative max-[1100px]:max-w-[95vw] max-[1100px]:min-w-0">
            <h3 className="text-white text-center font-['Bebas_Neue'] text-[42px] font-normal leading-normal mb-[12px] tracking-[0.01em]">
              VOBE.APP<br />
              <span className="block font-['Inter'] text-[19px] font-normal leading-[22px]">КРИПТО-СТАРТАП</span>
            </h3>
            <div className="flex flex-col gap-[16px] text-left text-white font-['Inter'] text-[15px] leading-relaxed">
              <div>
                <b>ЗАДАЧА</b><br />
                Автоматизировать написание статей для блога на Medium.
              </div>
              <div>
                <b>ЧТО СДЕЛАНО</b>
                <ol className="list-decimal pl-[20px] mt-[4px] space-y-[4px]">
                  <li>База знаний о компании + конкуренты</li>
                  <li>AI-агент со стилем автора</li>
                  <li>Telegram-бот — основа → готовая статья</li>
                </ol>
              </div>
              <div className=" text-[#222] rounded-[14px] py-[14px] px-[18px] text-[1.08rem] font-semibold mt-[10px] text-center flex flex-col justify-center bg-[linear-gradient(106deg,_#FF9C1C_5.27%,_#FFCB78_22.82%,_#FF9C1C_75.97%,_#FFCB78_93.14%,_#FF9C1C_108.83%)]">
                Результат: 
Рост доверия в агрессивной нише

              </div>
            </div>
          </div>

          {/* Ваш кейс */}
          <div className="GradientBlack rounded-[18px] pt-[32px] px-[28px] pb-[28px] max-w-[340px] min-w-[260px] flex flex-col items-center relative max-[1100px]:max-w-[95vw] max-[1100px]:min-w-0">
            <h3 className="text-white text-center font-['Bebas_Neue'] text-[42px] font-normal leading-normal mb-[12px] tracking-[0.01em]">
              ВАШ БРЕНД
            </h3>
            <div className="flex flex-col gap-[16px] text-left text-white font-['Inter'] text-[15px] leading-relaxed mt-[22px]">
              <div>
                <b>ЗАДАЧА</b><br />
                Расскажите о вашей задаче — мы создадим решение под ваши цели.
              </div>
              <div>
                <b>ВОЗМОЖНОСТИ</b>
                <ul className="list-disc pl-[20px] mt-[4px] space-y-[4px]">
                  <li>В соц. сетях ведёт Reels и собирает охваты</li>
                  <li>На сайте работает как видео-консультант</li>
                  <li>В обучении проводит инструктажи (сотрудники их реально смотрят!)</li>
                </ul>
              </div>
              <div className=" text-[#222] rounded-[14px] py-[14px] px-[18px] text-[1.08rem] font-semibold mt-[10px] text-center flex flex-col justify-center bg-[linear-gradient(106deg,_#FF9C1C_5.27%,_#FFCB78_22.82%,_#FF9C1C_75.97%,_#FFCB78_93.14%,_#FF9C1C_108.83%)]">
                <a href="#contacts" className="text-[#222] no-underline block w-full h-full">
                  Свяжитесь с нами →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealCases;