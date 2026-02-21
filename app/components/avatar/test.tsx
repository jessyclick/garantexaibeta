import Link from "next/link";

export default function FooterLegal() {
  return (
    <div
      className="flex items-center justify-between w-full font-['Ubuntu'] not-italic text-[15px] text-[rgba(255,255,255,0.52)] whitespace-pre-wrap"
      style={{ fontFamily: 'Ubuntu, sans-serif' }}
    >
      <div className="h-[43px] w-[543px] leading-[0]">
        <p className="mb-0">
          <span className="leading-[15px]">© 2023–2026 GarantexAI. </span>
          <span className="leading-[15px] uppercase">Все права защищены</span>
        </p>
        <p className="leading-[15px]">
          Агентство ИИ, разработка ИИ-решений и автоматизация бизнес процессов.
        </p>
      </div>
      <div className="flex gap-[41px] items-center leading-[21.476px]">
        <Link href="/privacy" className="h-[23px] w-[231px] hover:text-[#ff9c1c] transition-colors duration-300">
          Политика конфиденциальности
        </Link>
        <Link href="/offer" className="h-[23px] w-[124px] hover:text-[#ff9c1c] transition-colors duration-300">
          Договор оферты
        </Link>
        <Link href="/sitemap" className="h-[23px] w-[87px] hover:text-[#ff9c1c] transition-colors duration-300">
          Карта сайта
        </Link>
      </div>
    </div>
  );
}
