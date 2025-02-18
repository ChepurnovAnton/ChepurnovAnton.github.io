import styles from "./AnimeList.module.scss";
import { Link } from "react-router";
import AnimeItem from "../AnimeItem/AnimeItem";
import MyLoader from "../Skeleton/Steleton";

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
  isLoading: boolean;
  status: string;
}

const AnimeList: React.FC<AnimeListProps> = ({
  animeList = [],
  isLoading,
  status,
}) => {
  
  const renderLoader = () => {
    const loaderArr = [1, 2, 3, 4, 5, 6];
    return loaderArr.map((item) => <MyLoader key={item} />);
  };

  const renderAnimeList = () => {
    return animeList.map((anime) => (
      <li key={anime.id}>
        <Link to={`/${anime.code}`}>
          <AnimeItem
            names={anime.names}
            posters={anime.posters}
            genres={anime.genres}
            season={anime.season}
            description={anime.description}
          />
        </Link>
      </li>
    ));
  };

  const renderContent = () => {
    if (isLoading || status === "pending") {
      return renderLoader();
    }
    return renderAnimeList();
  };

  return <ul className={styles.anime_list}>{renderContent()}</ul>;
};

export default AnimeList;
