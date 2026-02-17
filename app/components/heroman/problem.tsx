import React from 'react';
import Image from 'next/image';
import HeaderWrapper from '../headerWrapper';


const Problem = () => {
  return (
    <section className="flex justify-center py-16 md:py-[64px] text-white">
      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-2 items-center gap-8">
        <div className="flex-1 min-w-[320px] flex items-center justify-center">
          <Image
            src="/assets/heroman-e.png"
            alt="AI face split illustration"
            width={480}
            height={480}
            className="rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
        <div className="flex-[2_1_600px] flex flex-col w-full">
          <HeaderWrapper
            align="left"
            withBr={false}
            href=""
            kicker="#Проблема"
            title="ПОЧЕМУ"
            titleAccent=" ВАС ЗАБЫВАЮТ?"
          />
          <div className="font-inter text-custom-lg text-white">
            <b>Сергей потратил 300 000₽ на блогера.<br />Через месяц тот ушёл к конкуренту.</b>
            <br />
            Половина аудитории ушла за ним. Узнаёте ситуацию?
          </div>
          <ul className="mb-6 mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <Image src="/assets/icon_xclode.png" alt="x icon" width={28} height={28} />
              <b>Безликость</b> — красивый логотип, который никто не помнит
            </li>
            <li className="flex items-center gap-3">
              <Image src="/assets/icon_xclode.png" alt="x icon" width={28} height={28} />
              <b>Скучная подача</b> — стоковые фото вызывают зевоту
            </li>
            <li className="flex items-center gap-3">
              <Image src="/assets/icon_xclode.png" alt="x icon" width={28} height={28} />
              <b>Нет доверия</b> — люди покупают у людей, а не у корпораций
            </li>
          </ul>
          <div
            className="flex items-start gap-4 rounded-[13px] border border-[#FE7905] px-5 py-4 shadow-[0_2px_12px_rgba(255,153,0,0.12)]"
            style={{
              background:
                'linear-gradient(108deg, #FF9C1C 5.75%, #FFCB78 30.93%, #FF9C1C 107.22%, #FFCB78 131.88%, #FF9C1C 154.4%), rgba(0, 0, 0, 0.59)'
            }}
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full">
              <img src="/assets/feauture-icon.png" alt="" className="w-8 h-8" />
            </div>
            <div className="text-base text-custom-lg text-black">
              <b>Простое решение:</b>
              <br />
              Дайте бренду лицо, голос и характер. <br />Один раз. Навсегда.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
