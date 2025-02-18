import EpisodeInThePlayer from "../EpisodeInThePlayer/EpisodeInThePlayer";
import styles from "./EpisodesInThePlayer.module.scss";
import { X, ArrowDownUp } from "lucide-react";

const EpisodesInThePlayer = ({ series = [], setOpenEpisodes }) => {
  return (
    <div className={`${styles.episodes}`}>
      <div className={styles.title}>
        <h3>Эпизоды</h3>
        <p>Список эпизодов релиза</p>
        <button
          className={styles.button}
          onClick={() => setOpenEpisodes(false)}
        >
          <X color="white" />
        </button>
      </div>
      <div className={styles.input_wripper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск по номеру серии"
        />
        <button className={styles.button}>
          <ArrowDownUp color="white" />
        </button>
      </div>
      <div className={styles.series}>
        {series.map((serie) => (
          <EpisodeInThePlayer
            key={serie.uuid}
            episode={serie.episode}
            name={serie.name}
            url={serie?.hls.hd}
            setOpenEpisodes={setOpenEpisodes}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodesInThePlayer;
