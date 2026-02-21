import HeaderWrapper from "../headerWrapper";

type VoiceRow = {
  label: string;
  icon: string;
  samples: {
    emotion: string;
    audioUrl: string;
  }[];
};

type Props = {
  voiceRows?: VoiceRow[];
};

const defaultVoiceRows: VoiceRow[] = [
  {
    label: "ОРИГИНАЛ (ЧЕЛОВЕК)",
    icon: "/assets/clone-real.png",
    samples: [
      { emotion: "Радость", audioUrl: "/assets/voices/original-joy.mp3" },
      { emotion: "Шёпот", audioUrl: "/assets/voices/original-whisper.mp3" },
      { emotion: "Русский", audioUrl: "/assets/voices/original-ru.mp3" },
    ],
  },
  {
    label: "КЛОН (СИИ)",
    icon: "/assets/clone-clone.png",
    samples: [
      { emotion: "Радость", audioUrl: "/assets/voices/clone-joy.mp3" },
      { emotion: "Шёпот", audioUrl: "/assets/voices/clone-whisper.mp3" },
      { emotion: "Русский", audioUrl: "/assets/voices/clone-ru.mp3" },
    ],
  },
];

export default function VoiceComparisonSection({
  voiceRows = defaultVoiceRows,
}: Props) {
  return (
    <section className="py-[100px] px-5 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(100,150,255,0.08)_0%,transparent_70%)] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-10">
          <HeaderWrapper
            withBr={false}
            kicker="#Слушайте сами"
            title="НЕ ВЕРЬТЕ СЛОВАМ —"
            titleAccent="УСЛЫШИТЕ КАЧЕСТВО"
          />
        </div>

        <p className="text-center text-[16px] md:text-[18px] leading-[1.5] text-[#ccc] m-0 mb-[40px] md:mb-[30px]">
          Мы упростили процесс озвучки до одного запроса в боте.
        </p>

        <div className="rounded-[12px] md:rounded-[20px] overflow-x-auto md:overflow-hidden border border-transparent bg-origin-border [background-clip:padding-box,_border-box] bg-[linear-gradient(black,black),linear-gradient(150.35deg,#fe7905_3.69%,#2a0c00_45.84%,#a93301_98.89%)]">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr>
                <th
                  className="p-[12px_8px] sm:p-[16px_12px] md:p-5 text-center border-b-2 border-r border-[rgba(255,156,28,0.2)] text-[11px] sm:text-[13px] md:text-base"
                  colSpan={2}
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.5px] bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent">
                      Оригинал Русский
                    </span>
                  </div>
                </th>
                <th
                  className="p-[12px_8px] sm:p-[16px_12px] md:p-5 text-center border-b-2 border-l border-[rgba(255,156,28,0.2)] text-[11px] sm:text-[13px] md:text-base"
                  colSpan={2}
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.5px] bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent">
                      ИИ-дубляж (English)
                    </span>
                  </div>
                </th>
                <th
                  className="p-[12px_8px] sm:p-[16px_12px] md:p-5 text-center border-b-2 border-l border-[rgba(255,156,28,0.2)] text-[11px] sm:text-[13px] md:text-base"
                  colSpan={2}
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.5px] bg-[linear-gradient(101.53deg,#ff9c1c_3.95%,#f9b953_25.99%,#ff9c1c_61.02%,#ffc466_74.88%,#ff9c1c_87.55%)] bg-clip-text text-transparent">
                      ИИ-дубляж (Chinese)
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {voiceRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[rgba(255,156,28,0.15)] last:border-b-0 transition-colors duration-200 hover:bg-[rgba(255,156,28,0.03)]"
                >
                  <td className="p-[12px_8px] sm:p-[16px_12px] md:p-[24px_20px] text-left bg-[rgba(10,10,10,0.5)] border-r border-[rgba(255,156,28,0.15)] sticky left-0 z-10">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <span className="flex items-center justify-center w-[70px] min-w-[24px] sm:min-w-[28px] md:min-w-[32px] text-[16px] sm:text-[20px] md:text-[24px]">
                        <img src={row.icon} alt={row.label} />
                      </span>
                      <span className="text-[11px] hidden md:block sm:text-[13px] md:text-[16px] font-semibold text-white uppercase tracking-[0.5px]">
                        {row.label}
                      </span>
                    </div>
                  </td>
                  {row.samples.map((sample, sampleIndex) => (
                    <td
                      key={sampleIndex}
                      className="p-[12px_8px] sm:p-[16px_12px] md:p-[24px_20px] text-center border-r border-[rgba(255,156,28,0.15)] last:border-r-0"
                    >
                      <div className="flex items-center justify-center gap-3 min-h-[60px]">
                        <div className="flex-1 h-[24px] sm:h-[30px] md:h-[40px] flex items-center text-[#ff9c1c] opacity-80 transition-opacity duration-200 [&>svg]:w-full [&>svg]:h-full">
                          <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path
                              d="M 10 20 L 15 5 L 20 30 L 25 8 L 30 25 L 35 10 L 40 28 L 45 12 L 50 22 L 55 8 L 60 26 L 65 15 L 70 24 L 75 10 L 80 28 L 85 18 L 90 23"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <div
                          className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] flex shrink-0 items-center justify-center bg-[linear-gradient(135deg,rgba(255,156,28,0.2)_0%,rgba(255,156,28,0.1)_100%)] border-[2px] border-[rgba(255,156,28,0.3)] rounded-full cursor-pointer text-[#ff9c1c] transition-all duration-300 hover:bg-[linear-gradient(135deg,rgba(255,156,28,0.4)_0%,rgba(255,156,28,0.2)_100%)] hover:border-[rgba(255,156,28,0.6)] hover:scale-110 active:scale-95 [&>svg]:w-[18px] [&>svg]:h-[18px] sm:[&>svg]:w-[20px] sm:[&>svg]:h-[20px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px]"
                          title={`Play: ${sample.emotion}`}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}