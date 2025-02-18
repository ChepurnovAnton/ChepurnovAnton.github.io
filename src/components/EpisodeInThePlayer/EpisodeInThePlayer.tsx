
import { useDispatch, useSelector } from "react-redux"
import { changeCurrentEpisode } from "../../redux-toolkit/slices/currentEpisodeSlice"
import styles from './EpisodeInThePlayer.module.scss'

const EpisodeInThePlayer = ({episode, name, url, setOpenEpisodes}) => {
const activeEpisode = useSelector((state)=> state.currentEpisode.currentEpisode)
  const changeEpisode = () => {
    dispatch(changeCurrentEpisode(url))
    setOpenEpisodes(false)
  }

  const dispatch = useDispatch()
  return (
    <button onClick={changeEpisode} className={activeEpisode === url ? styles.active: styles.episode}>
      <span>Эпизод {episode}</span>
      <span>{name}</span>
    </button>
  )
}

export default EpisodeInThePlayer