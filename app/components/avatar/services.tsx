import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Импортируем Link

const services = [
  {
    slug: 'avtomatizaciya-seo', // 2. Добавляем уникальные слаги
    icon: '/assets/serv-1.png',
    title: 'АВТОМАТИЗАЦИЯ SEO-ПРОДВИЖЕНИЯ',
    description: 'Превратите ваш сайт в машину по привлечению клиентов, которая работает 24/7 без расходов на рекламу. Наша AI-система автоматически наполнит сайт сотнями SEO-статей, обеспечив вам органический рост, стабильный поток заявок из Яндекс и Google в 5 раз дешевле, чем услуги SEO-агентства.',
    buttonColor: 'gray',
  },
  {
    slug: 'vedenie-socsetey',
    icon: '/assets/serv-2.png',
    title: 'ВЕДЕНИЕ СОЦ. СЕТЕЙ',
    description: 'Превратите ваши соцсети в ценный бизнес-актив, который работает на вас круглосуточно. Мы построим для вас интеллектуальную SMM-систему, которая будет сама генерировать качественный контент и привлекать клиентов, пока вы развиваете продукт.',
    buttonColor: 'gray',
  },
  {
    slug: 'vedenie-bloga',
    icon: '/assets/serv-3.png',
    title: 'ВЕДЕНИЕ МЕДИА-ПЛАТФОРМ',
    description: 'Станьте лидером мнений в своей нише, регулярно заявляя о себе на главных площадках страны. Наша система «под ключ» будет создавать экспертный контент и размещать его на TenChat, VC.ru, Habr, Дзен и др., пока вы получаете признание, рост авторитета и новых клиентов.',
    buttonColor: 'gray',
  },
  {
    slug: 'rerait-novostey',
    icon: '/assets/serv-4.png',
    title: 'НОВОСТИ НА АВТОПИЛОТЕ',
    description: 'Превращайте любые новости в ваш уникальный контент за 1 минуту. Пока конкуренты читают — вы первым публикуете экспертное мнение и забираете всё внимание аудитории.',
    buttonColor: 'gray',
  },
  {
    slug: 'perevod-video',
    icon: '/assets/serv-5.png',
    title: 'ПЕРЕВОД ВИДЕО',
    description: 'Перевод и озвучка видео на 100+ языков вашим голосом. Масштабируйте бизнес, адаптируйте контент для любой аудитории и привлекайте трафик из YouTube, TikTok и других площадок — быстро, качественно и без студийных затрат.',
    buttonColor: 'gray',
  },
  {
    slug: 'ai-avatar',
    icon: '/assets/serv-6.png',
    title: 'ИИ-АВАТАР (ЦИФРОВОЙ ДВОЙНИК)',
    description: 'Создайте своего цифрового двойника, который будет записывать видео за вас — с вашим лицом, голосом и стилем.ИИ-аватар помогает выпускать контент в 10 раз быстрее, без съёмок и усталости. Работает 24/7, пока вы развиваете бизнес.',
    buttonColor: 'gray',
  },
  {
    slug: 'marketplaces',
    icon: '/assets/serv-7.png',
    title: 'ДЛЯ МАРКЕТПЛЕЙСОВ И МАГАЗИНОВ',
    description: 'Мы превращаем обычное фото товара в полный набор продающего контента: баннеры, фоны, 3D-анимации, видео и даже полноценные рекламные ролики. Никаких фотосессий и студий — всё создаётся с помощью ИИ, а процессы можно автоматизировать индивидуально под ваш бизнес.',
    buttonColor: 'gray',
  },
  {
    slug: 'sozdanie-maskota',
    icon: '/assets/serv-8.png',
    title: '3D-ПЕРСОНАЖИ ДЛЯ БИЗНЕСА',
    description: 'Разработаем для вашего бизнеса главный актив в борьбе за внимание — уникального 3D-персонажа. На его основе мы будем вручную создавать видео для решения любой вашей бизнес-задачи. ',
    buttonColor: 'gray',
  },
];



export default function Services() {
  return (
    <section className="bg-[#000000] py-[148px] rounded-[24px] shadow-[0_4px_32px_rgba(0,0,0,0.15)]">
      <h2 className="text-center mb-[24px]">
        <span className="text-white text-4xl font-bold">УСЛУГИ</span> 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] justify-center max-w-[1300px] mx-auto px-4">
        {services.map((service, idx) => {
          // ЛОГИКА ССЫЛКИ: 
          // Если это карточка маркетплейсов, ведем на главную '/', 
          // иначе на страницу '/services/[slug]'
          const isMarketplace = service.slug === 'marketplaces';
          const href = isMarketplace ? '/' : `/services/${service.slug}`;

          return (
            <div 
              className="bg-[#222] rounded-[16px] GradientBlack shadow-[0_2px_16px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col items-center pb-[24px] min-h-[420px]" 
              key={idx}
            >
              <div className="flex justify-center items-center w-full mb-[48px]">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={1000} 
                  height={120} 
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col items-left pb-[32px] px-[24px] w-full">
                <h3 className="text-[32px] font-bebas gradientText mb-[16px] text-left uppercase">
                  {service.title}
                </h3>
                <p className="text-[#D1D1D1] text-[16px] pl-[24px] border-l border-solid border-[#FF9C1C] mb-[32px] text-left">
                  {service.description}
                </p>
                
                {/* Ссылка обернута вокруг кнопки */}
                <Link href={href} className="mt-auto w-full">
                  <button
                    className="w-full font-semibold border-none rounded-[32px] py-[12px] px-[32px] text-[1rem] cursor-pointer transition-all duration-200 bg-[#444] text-white hover:bg-[#555] active:scale-95"
                  >
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}