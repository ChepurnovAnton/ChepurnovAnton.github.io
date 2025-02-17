import styles from './AnimeList.module.scss'
import { Link } from 'react-router'
import AnimeItem from '../AnimeItem/AnimeItem'

interface Anime {
  id: string;
  code: string;
  names: {
    ru: string;
    en: string;
  };
  posters: {
    medium: {
      url: string;
      raw_base64_file: null;
    };
  };
  genres: string[];
  season: {
    year: number;
    string: string;
  };
  description: string;
}

interface AnimeListProps {
  animeList: Anime[];
}

const AnimeList: React.FC<AnimeListProps> = ({animeList = []}) => {
  return (

    <ul className={styles.anime_list}>
      {animeList.map((anime) => (
        <li key={anime.id}>
          <Link to={`/${anime.code}`}>
            <AnimeItem names = {anime.names} posters = {anime.posters} genres = {anime.genres} season = {anime.season} description = {anime.description} />
          </Link>
        </li>
      ))}
    </ul>

  )
}

export default AnimeList