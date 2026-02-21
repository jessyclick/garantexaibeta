'use client';

import { useState } from 'react';
import HeaderWrapper from '../headerWrapper';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Это плагиат?',
      answer: 'Наша система использует передовые алгоритмы обработки естественного языка для создания оригинального контента, который звучит естественно и не воспринимается как робототехнический.'
    },
    {
      id: '2',
      question: 'ИИ может запостить фейк?',
      answer: 'Да, абсолютно безопасно. Мы используем официальные API социальных сетей и полностью соблюдаем их правила. Ваш аккаунт не будет заблокирован.'
    },
    {
      id: '3',
      question: 'Можно сделать премодерацию?',
      answer: 'У нас есть полная система резервного копирования и отказоустойчивости. Все критические функции имеют резервные каналы. Мы также предоставляем техническую поддержку 24/7.'
    },
    {
      id: '4',
      question: 'Как помогает SEO',
      answer: 'Да, вы можете загрузить свой собственный контент и использовать его с нашей системой автоматизации. Она будет адаптировать его для разных платформ.'
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="py-[60px] md:py-[100px] px-5 text-white relative">
      {/* Встроенный стиль для анимации раскрытия */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
      `}} />

      <div className="max-w-[920px] mx-auto">
        <HeaderWrapper
          kicker="#Вопрос-ответ"
          title="ЧАСТЫЕ ВОПРОСЫ"
          titleAccent="И ОТВЕТЫ"
          align="center"
          withBr={false}
        />

        <div className="mt-[40px] md:mt-[60px] flex flex-col gap-[12px] md:gap-[16px]">
          {faqItems.map((item) => {
            const isActive = expanded === item.id;
            
            return (
              <div
                key={item.id}
                className={`rounded-[12px] md:rounded-[14px] overflow-hidden transition-all duration-300 border bg-origin-border [background-clip:padding-box,_border-box] hover:border-[rgba(255,153,0,0.6)] ${
                  isActive 
                    ? "border-[#ff9900] bg-[linear-gradient(#140d00,#140d00),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]" 
                    : "border-transparent bg-[linear-gradient(black,black),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]"
                }`}
              >
                <button
                  className="w-full py-[18px] px-[20px] md:py-[24px] md:px-[32px] bg-transparent border-none cursor-pointer flex justify-between items-center gap-[20px] transition-all duration-300 outline-none"
                  onClick={() => toggleExpanded(item.id)}
                >
                  <span className="text-[16px] md:text-[18px] font-semibold text-left leading-[1.4] text-white transition-colors duration-300">
                    {item.question}
                  </span>
                  <span 
                    className={`w-[28px] h-[28px] min-w-[28px] md:w-[32px] md:h-[32px] md:min-w-[32px] flex items-center justify-center bg-[linear-gradient(128deg,#FF9C1C_35.08%,#FFCB78_92.5%,#FF9C1C_111.8%)] text-[#0a0a0a] rounded-full transition-transform duration-300 shrink-0 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                
                {isActive && (
                  <div className="px-[20px] pb-[18px] md:px-[32px] md:pb-[24px] border-t border-[rgba(255,153,0,0.2)] animate-slideDown">
                    <p className="text-[15px] md:text-[16px] leading-[1.6] text-white/80 m-0 mt-[16px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;