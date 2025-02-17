
import styles from './DescriptionsAnime.module.scss'


interface Anime {
  posters: {
    small: {
      url: string;
    };
  };
  names: {
    ru: string;
    en: string;
  };
  type: {
    string: string;
    length?: string;
    episodes?: number;
  };
  genres: string[];
  season: {
    year: number;
  };
  description: string;
}

interface DescriptionsAnimeProps {
  anime: Anime;
  baseSrcImage: string;
}

const DescriptionsAnime: React.FC<DescriptionsAnimeProps> = ({anime, baseSrcImage}) => {
  return (
    <div className={styles.info}>
      <img className={styles.poster} src={baseSrcImage + anime?.posters.small.url} alt="" />
      <h1 className={styles.title}>{anime?.names.ru}</h1>
      <p className={styles.sub_title}>{anime?.names.en}</p>
      <div className={styles.types}>
        <div>
          <span className={styles.type}>Тип:</span>
          <span>{anime?.type.string}</span>
        </div>
        <div className=''>
          <span className={styles.type}>Жанры:</span>
          {anime?.genres.map(genre => <span key={genre}>{genre + ' '}</span>)}
        </div>
        <div>
          <span className={styles.type}>Год выхода:</span>
          <span>{anime?.season.year}</span>
        </div>
        <div>
          <span className={styles.type}>Длительность:</span>
          <span>{anime?.type.length ?? 'Неизвестно'}</span>
        </div>
        <div>
          <span className={styles.type}>Всего эпизодов:</span>
          <span>{anime?.type.episodes}</span>
        </div>
      </div>
      <p className={styles.description}>{anime?.description}</p>
    </div>
  )
}

export default DescriptionsAnime