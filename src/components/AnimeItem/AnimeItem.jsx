import styles from './AnimeItem.module.scss'

const AnimeItem = ({ data }) => {

  // console.log(data.data.names.ru)
  // const name = data.data.name.main
  const image = data?.posters.medium.url
  const baseSrcImage = 'https://dl-20250210-4.anilib.one'

  const name = data?.names.ru

  return (
    <article className={styles.post}>
      <img className={styles.img} src={baseSrcImage + image} alt={''} width={270} />
      <div className={styles.name}>
        <h2 className={styles.title}>{name}</h2>
        <h3>{data.names.en}</h3>
      </div>
      <div className={styles.genres}>
        {data.genres.map(genre => <span key={genre}>{genre} </span>)}
      </div>
      <div className={styles.season}>
        <span>{data.season.year} </span>
        <span>{data.season.string} </span>
      </div>
      <p className={styles.description}>{data.description}</p>
    </article>
  )
}

export default AnimeItem