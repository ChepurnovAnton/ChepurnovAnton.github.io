import styles from "./AnimeItem.module.scss";

interface AnimeItemProps {
  names: {
    ru: string;
    en: string;
  };
  genres: string[];
  season: {
    year: number;
    string: string;
  };
  posters: {
    medium: {
      raw_base64_file: null;
      url: string;
    };
  };
  description: string;
}

const AnimeItem: React.FC<AnimeItemProps> = ({ names, genres, season, posters, description }) => {

  const baseSrcImage = "https://dl-20250210-4.anilib.one";

  return (
    <article className={styles.post}>
      <img
        className={styles.img}
        src={baseSrcImage + posters.medium.url}
        alt={""}
        width={270}
      />
      <div className={styles.name}>
        <h2 className={styles.title}>{names.ru}</h2>
        <h3>{names.en}</h3>
      </div>
      <div className={styles.genres}>
        {genres.map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </div>
      <div className={styles.season}>
        <span>{season.year} </span>
        <span>{season.string} </span>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default AnimeItem;
