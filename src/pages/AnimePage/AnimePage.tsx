import { useEffect} from 'react'
import { useParams } from 'react-router'
import Episodes from '../../components/Episodes/Episodes'
import styles from './AnimePage.module.scss'
import AnimePageSkeleton from '../../components/Skeleton/AnimePageSkeleton'

import DescriptionsAnime from '../../components/DescriptionsAnime/DescriptionsAnime'
import AnimePageMenu from '../../components/AnimePageMenu/AnimePageMenu'

import { useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../redux-toolkit/slices/currentPageSlice'
import { useGetOneAnimeQuery } from '../../API/animeApi'

const AnimePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const baseSrcImage = 'https://dl-20250210-4.anilib.one'
  const { data: anime, isLoading } = useGetOneAnimeQuery(id)


  useEffect(() => {
    dispatch(changeCurrentPage(anime?.names.ru))
  }, [anime, dispatch])

  if (isLoading) return <AnimePageSkeleton/>


  return (
    <section className={styles.page}>
      <DescriptionsAnime anime={anime} baseSrcImage={baseSrcImage} />
      <AnimePageMenu />
      <Episodes series={anime?.player.list} />
    </section>
  )
}

export default AnimePage