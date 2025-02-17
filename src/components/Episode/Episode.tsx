import styles from './Episode.module.scss'

interface EpisodeProps {
  openVideoPlayer: (url: string) => void;
  item: {
    episode: number;
    name: string;
    preview: string;
    hls: {
      fhd: string;
      hd: string;
    };
  };
}

const Episide: React.FC<EpisodeProps> = ({ openVideoPlayer, item }) => {
  const baseSrcImage = 'https://dl-20250210-4.anilib.one';


  return (
    <div>
      <button
        className={styles.episode_button}
        key={item.episode}
        style={{ backgroundImage: `url(${baseSrcImage + item?.preview})` }}
        onClick={() => openVideoPlayer(item?.hls.hd)}
      >
        <span>{item.episode} серия</span>
        <span>{item.name}</span>
        {/* <span className={styles.progress} style={{ width: `${progressBar}%` }}></span> */}
      </button>
    </div>
  )
}

export default Episide