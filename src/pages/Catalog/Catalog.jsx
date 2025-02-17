import styles from "./Catalog.module.scss";
import { Link } from "react-router";
import { useGetAnimeQuery, useSearchAnimeQuery } from "../../API/animeApi";
import { useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";

const Catalog = () => {
  const [search, setSearch] = useState('')
  const { data: animeData = [], isLoading } = useGetAnimeQuery(1)
  const { data: searchData = [], isPending } = useSearchAnimeQuery(search)

  const animeList = search ? searchData?.list : animeData?.list

  if (isLoading || isPending) return <div>Loading...</div>

  return (
    <section className={styles.catalog}>
      <div className={styles.search}>
        <input className={styles.input} type="text" name="" id="" onChange={(evt) => setSearch(evt.target.value)} placeholder='Поиск по каталогу' />
      </div>
      <div className={styles.anime_list}>
        <div>
          <AnimeList animeList={animeList} />
        </div>

        <div className={styles.filters}>
          будет фильтр
        </div>

      </div>



    </section>
  );
};

export default Catalog;
