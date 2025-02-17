import { useEffect} from 'react'
import { useParams } from 'react-router'
import Episodes from '../../components/Episodes/Episodes'
import styles from './AnimeItemPage.module.scss'

import DescriptionsAnime from '../../components/DescriptionsAnime/DescriptionsAnime'
import AnimePageMenu from '../../components/AnimePageMenu/AnimePageMenu'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../redux-toolkit/slices/currentPageSlice'
import { useGetOneAnimeQuery } from '../../API/animeApi'

const AnimeItemPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const baseSrcImage = 'https://dl-20250210-4.anilib.one'
  const { data: anime, isLoading } = useGetOneAnimeQuery(id)


  useEffect(() => {
    dispatch(changeCurrentPage(anime?.names.ru))
  }, [anime, dispatch])

  if (isLoading) return <div>Loading...</div>

  console.log(anime);


  return (
    <section className={styles.page}>
      <DescriptionsAnime anime={anime} baseSrcImage={baseSrcImage} />
      <AnimePageMenu />
      <Episodes series={anime?.player.list} />
    </section>
  )
}

export default AnimeItemPage