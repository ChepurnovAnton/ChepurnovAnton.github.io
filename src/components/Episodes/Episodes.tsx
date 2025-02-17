import { useState, useMemo, useCallback } from 'react';
import styles from './Episodes.module.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Episode from '../Episode/Episode';


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
  const [activeEpisode, setActiveEpisode] = useState('');
  const [searchEpisode, setSearchEpisode] = useState('');
  const [openPlayer, setOpenPlayer] = useState(false);

  const openVideoPlayer = useCallback((url: string) => {
    setActiveEpisode(url);
    setOpenPlayer(true);
  }, []);


  const filteredSeries = useMemo(() => {
    return series.filter(item => searchEpisode ? item.episode === parseInt(searchEpisode) : item);

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
          placeholder='Введите номер серии'
        />
      </div>

      <div className={styles.episodes}>
        {filteredSeries.map(series => <Episode key={series.uuid} openVideoPlayer={openVideoPlayer} item={series} />)}
      </div>

      {openPlayer && (
        <VideoPlayer
          activeEpisode={activeEpisode}
          setOpenPlayer={setOpenPlayer}
        />
      )}
    </>
  );
};

export default Episodes;