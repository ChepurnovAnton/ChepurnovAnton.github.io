
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.scss';
import { ArrowLeft } from 'lucide-react';

const baseUrl = 'https://cache.libria.fun';

interface VideoPlayerProps {
  activeEpisode: string;
  setOpenPlayer: (open: boolean) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ activeEpisode, setOpenPlayer }) => {

  return (
    <div className={styles.video_player}>
      <button className={styles.back_button} onClick={() => setOpenPlayer(false)}>
        <ArrowLeft color='white' />
      </button>
      {activeEpisode && (
        <ReactPlayer
          width='100%'
          height='100%'
          url={`${baseUrl}${activeEpisode}`}
          controls
        />
      )}
    </div>
  );
};

export default VideoPlayer;