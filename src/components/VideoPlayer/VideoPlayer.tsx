import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";
import { ArrowLeft, ListVideo } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import EpisodesInThePlayer from "../EpisodesInThePlayer/EpisodesInThePlayer";
import { useState } from "react";

const baseUrl = "https://cache.libria.fun";

interface VideoPlayerProps {
  setOpenPlayer: (open: boolean) => void;
  series: any;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ setOpenPlayer, series }) => {
  const [openEpisodes, setOpenEpisodes] = useState<boolean>(false);

  const nameAnime = useSelector(
    (state: RootState) => state.currentPage.currentPage
  );

  const activeEpisode = useSelector(
    (state: RootState) => state.currentEpisode.currentEpisode
  );
  return (
    <div className={styles.video_player}>
      <div className={styles.controls}>
        <button className={styles.button} onClick={() => setOpenPlayer(false)}>
          <ArrowLeft color="white" />
        </button>
        <button className={styles.button}>
          <ListVideo color="white" onClick={()=> setOpenEpisodes(true)}/>
        </button>
        <span className={styles.anime_name}>{nameAnime}</span>
      </div>

      {openEpisodes && <EpisodesInThePlayer series={series} setOpenEpisodes = {setOpenEpisodes}/>}

      {activeEpisode && (
        <ReactPlayer
          width="100%"
          height="100%"
          url={`${baseUrl}${activeEpisode}`}
          controls
        />
      )}
    </div>
  );
};

export default VideoPlayer;
