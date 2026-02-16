import HeaderWrapper from "../headerWrapper";
import styles from "./voiceComparison.module.scss";

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
    <section className={styles.section}>
      <div className={styles.background} />

      <div className={styles.container}>
        <HeaderWrapper
        withBr={false}
          kicker="#Слушайте сами"
          title="НЕ ВЕРЬТЕ СЛОВАМ —"
          titleAccent="УСЛЫШИТЕ КАЧЕСТВО"
        />

        <p className={styles.subtitle}>
          Мы упростили процесс озвучки до одного запроса в боте.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.voiceTable}>
            <thead>
              <tr>
                <th className={styles.emotionsHeader} colSpan={2}>
                  <div className={styles.headerGroup}>
                    <span className={styles.headerLabel}>Оригинал Русский</span>
                  </div>
                </th>
                <th className={styles.languagesHeader} colSpan={2}>
                  <div className={styles.headerGroup}>
                    <span className={styles.headerLabel}>ИИ-дубляж (English)</span>
                  </div>
                </th>
                <th className={styles.languagesHeader} colSpan={2}>
                  <div className={styles.headerGroup}>
                    <span className={styles.headerLabel}>ИИ-дубляж (Chinese)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
  {voiceRows.map((row, rowIndex) => (
    <tr key={rowIndex} className={styles.tableRow}>
      <td className={styles.labelCell}>
        <div className={styles.labelContent}>
          <span className={styles.icon}>
            {/* Fixed the src attribute below */}
            <img src={row.icon} alt={row.label} />
          </span>
          <span className={styles.label}>{row.label}</span>
        </div>
      </td>
      {row.samples.map((sample, sampleIndex) => (
        <td key={sampleIndex} className={styles.audioCell}>
          <div className={styles.audioPlayer}>
            <div className={styles.waveform}>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                <path
                  d="M 10 20 L 15 5 L 20 30 L 25 8 L 30 25 L 35 10 L 40 28 L 45 12 L 50 22 L 55 8 L 60 26 L 65 15 L 70 24 L 75 10 L 80 28 L 85 18 L 90 23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className={styles.playButton} title={`Play: ${sample.emotion}`}>
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
