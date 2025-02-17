import React from 'react'
import styles from './AnimeList.module.scss'
import { Link } from 'react-router'
import AnimeItem from '../AnimeItem/AnimeItem'

const AnimeList = ({animeList}) => {
  return (

    <ul className={styles.anime_list}>
      {animeList.map((anime) => (
        <li key={anime.id}>
          <Link to={`/${anime.code}`}>
            <AnimeItem data={anime} />
          </Link>
        </li>
      ))}
    </ul>

  )
}

export default AnimeList