import styles from './Episode.module.scss'

const Episide = ({ openVideoPlayer, item}) => {
  const baseSrcImage = 'https://dl-20250210-4.anilib.one';


  return (
    <div>
      <button
        className={styles.episode_button}
        key={item.episode}
        style={{ backgroundImage: `url(${baseSrcImage + item?.preview})` }}
        onClick={() => openVideoPlayer(item?.hls.fhd)}
      >
        <span>{item.episode} серия</span>
        <span>{item.name}</span>
        {/* <span className={styles.progress} style={{ width: `${progressBar}%` }}></span> */}
      </button>
    </div>
  )
}

export default Episide