import Image from 'next/image'

type Platform = {
  id: string
  name: string
  img: string
}

const left: Platform[] = [
  { id: 'vk', name: 'VK', img: '/assets/icon_c-vk.png' },
  { id: 'ok', name: 'Одноклассники', img: '/assets/icon_c-odno.png' },
]

const center: Platform[] = [
  { id: 'dzen', name: 'Яндекс Дзен', img: '/assets/icon_c-dzen.png' },
  { id: 'tenchat', name: 'TenChat', img: '/assets/icon_c-habr.png' },
  { id: 'habr', name: 'Habr', img: '/assets/habr.png' },
]

const right: Platform[] = [
  { id: 'youtube', name: 'YouTube', img: '/assets/icon_c-youtube.png' },
  { id: 'vkvideo', name: 'VK Video', img: '/assets/icon_c-vk-video.png' },
  { id: 'rutube', name: 'Rutube', img: '/assets/icon_c-rutube.png' },
]

export default function ProjectsSection() {
  return (
    <section className="py-[48px] px-[16px] bg-[linear-gradient(180deg,#0b0706_0%,#0f0a09_100%)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[28px] items-start">
        
        {/* Колонка 1 */}
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-normal tracking-[1px] mb-[8px] h-[70px] text-left lg:text-center bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            СОЦИАЛЬНЫЕ СЕТИ
          </h3>
          {left.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-[18px] rounded-[24px] p-[18px_22px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_8px_30px_rgba(255,140,40,0.08),inset_0_0_18px_rgba(255,110,20,0.03)]"
            >
              <div className="min-w-[56px] h-[56px] rounded-[12px] flex items-center justify-center relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={36}
                  height={36}
                  className="relative z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(254,151,5,0.65)] blur-[16px] z-0" />
              </div>
              <div className="text-white font-['Bebas_Neue',_sans-serif] text-[30px] font-normal leading-normal">
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Колонка 2 */}
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-normal tracking-[1px] mb-[8px] h-[70px] text-left lg:text-center bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            ПРОФЕССИОНАЛЬНЫЕ ПЛАТФОРМЫ
          </h3>
          {center.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-[18px] rounded-[24px] p-[18px_22px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_8px_30px_rgba(255,140,40,0.08),inset_0_0_18px_rgba(255,110,20,0.03)]"
            >
              <div className="min-w-[56px] h-[56px] rounded-[12px] flex items-center justify-center relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={36}
                  height={36}
                  className="relative z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(254,151,5,0.65)] blur-[16px] z-0" />
              </div>
              <div className="text-white font-['Bebas_Neue',_sans-serif] text-[30px] font-normal leading-normal">
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Колонка 3 */}
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-['Bebas_Neue',_sans-serif] text-[35px] font-normal leading-normal tracking-[1px] mb-[8px] h-[70px] text-left lg:text-center bg-[linear-gradient(102deg,#FF9C1C_3.95%,#FFCB78_18.11%,#FF9C1C_61.02%,#FFCB78_74.88%,#FF9C1C_87.55%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            ВИДЕО-ПЛАТФОРМЫ
          </h3>
          {right.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-[18px] rounded-[24px] p-[18px_22px] border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(#0F0C09,#0F0C09),linear-gradient(124.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)] shadow-[0_8px_30px_rgba(255,140,40,0.08),inset_0_0_18px_rgba(255,110,20,0.03)]"
            >
              <div className="min-w-[56px] h-[56px] rounded-[12px] flex items-center justify-center relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={36}
                  height={36}
                  className="relative z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(254,151,5,0.65)] blur-[16px] z-0" />
              </div>
              <div className="text-white font-['Bebas_Neue',_sans-serif] text-[30px] font-normal leading-normal">
                {p.name}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}