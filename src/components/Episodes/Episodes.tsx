import { useState, useMemo, useCallback } from "react";
import styles from "./Episodes.module.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Episode from "../Episode/Episode";
import { useDispatch } from "react-redux";
import { changeCurrentEpisode } from "../../redux-toolkit/slices/currentEpisodeSlice";

interface SeriesItem {
  uuid: string;
  episode: number;
  name: string;
  preview: string;
  hls: {
    fhd: string;
  };
}

const Episodes = ({ series = [] }: { series: SeriesItem[] }) => {
  const dispatch = useDispatch();

  const [searchEpisode, setSearchEpisode] = useState("");
  const [openPlayer, setOpenPlayer] = useState(false);

  const openVideoPlayer = useCallback(
    (url: string) => {
      setOpenPlayer(true);
      dispatch(changeCurrentEpisode(url));
    },
    [dispatch]
  );

  const filteredSeries = useMemo(() => {
    return series.filter((item) =>
      searchEpisode ? item.episode === parseInt(searchEpisode) : item
    );
  }, [series, searchEpisode]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchEpisode(evt.target.value);
  };

  return (
    <>
      <div>
        <input
          className={styles.input}
          onChange={handleSearchChange}
          type="text"
          placeholder="Введите номер серии"
        />
      </div>

      <div className={styles.episodes}>
        {filteredSeries.map((series) => (
          <Episode
            key={series.uuid}
            openVideoPlayer={openVideoPlayer}
            item={series}
          />
        ))}
      </div>

      {openPlayer && (
        <VideoPlayer series={series} setOpenPlayer={setOpenPlayer} />
      )}
    </>
  );
};

export default Episodes;
