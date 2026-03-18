import Image from 'next/image'

type Platform = {
  id: string
  name: string
  img: string
  url: string // Добавили поле для ссылки
}

const left: Platform[] = [
  { id: 'vk', name: 'VK', img: '/assets/icon-vk-new.png', url: 'https://vk.com/garantexai' },
  { id: 'ok', name: 'Одноклассники', img: '/assets/icon-odno-new.png', url: 'https://ok.ru/profile/910428320381' },
]

const center: Platform[] = [
  { id: 'dzen', name: 'Яндекс Дзен', img: '/assets/icon-dzen-new.png', url: 'https://dzen.ru' },
  { id: 'tenchat', name: 'TenChat', img: '/assets/icon-tenchat-new.png', url: 'https://tenchat.ru/GarantexAi' },
  { id: 'habr', name: 'Habr', img: '/assets/icon-habr-new.png', url: 'https://habr.com/ru/users/GarantexAi/' },
]

const right: Platform[] = [
  { id: 'youtube', name: 'YouTube', img: '/assets/icon-yt-new.png', url: 'https://youtube.com' },
  { id: 'vkvideo', name: 'VK Video', img: '/assets/icon-vkvideo-new.png', url: 'https://vk.com/video' },
  { id: 'rutube', name: 'Rutube', img: '/assets/icon-rutube-new.png', url: 'https://rutube.ru' },
]

export default function ProjectsSection() {
  // Вынес рендер карточки в отдельную функцию, чтобы не дублировать код 3 раза
  const renderCard = (p: Platform) => (
    <a
      key={p.id}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[18px] rounded-[24px] p-[18px_22px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_8px_30px_rgba(255,140,40,0.08),inset_0_0_18px_rgba(255,110,20,0.03)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="min-w-[56px] h-[56px] rounded-[12px] flex items-center justify-center relative">
        <Image
          src={p.img}
          alt={p.name}
          width={36}
          height={36}
          className="relative z-10"
        />
        
      </div>
      <div className="text-white font-['Bebas_Neue',_sans-serif] text-[30px] font-normal leading-normal">
        {p.name}
      </div>
    </a>
  )

  return (
    <section className="py-[48px] px-[16px] bg-[linear-gradient(180deg,#0b0706_0%,#0f0a09_100%)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[28px] items-start">
        
        {/* Колонка 1 */}
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-[1] tracking-[1px] mb-[8px] h-[70px] text-left lg:text-center bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            СОЦИАЛЬНЫЕ СЕТИ
          </h3>
          {left.map(renderCard)}
        </div>

        {/* Колонка 2 */}
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-[1] tracking-[1px] mb-[8px] h-[70px] text-left lg:text-center bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            ПРОФЕССИОНАЛЬНЫЕ ПЛАТФОРМЫ
          </h3>
          {center.map(renderCard)}
        </div>

        {/* Колонка 3 */}
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-[1]tracking-[1px] mb-[8px] h-[70px] text-left lg:text-center bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            ВИДЕО-ПЛАТФОРМЫ
          </h3>
          {right.map(renderCard)}
        </div>
        
      </div>
    </section>
  )
}