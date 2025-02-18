import styles from "./Catalog.module.scss";
import { useGetAnimeQuery, useSearchAnimeQuery } from "../../API/animeApi";
import { useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";
import Filter from "../../components/Filter/Filter";
import { useDebounce } from "use-debounce";

const CatalogPage = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 1000);
  const { data: animeData = [], isLoading } = useGetAnimeQuery(1);
  const { data: searchData = [], status } =
    useSearchAnimeQuery(debouncedSearch);

  const animeList = debouncedSearch ? searchData?.list : animeData?.list;

  return (
    <section className={styles.catalog}>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          onChange={(evt) => setSearch(evt.target.value)}
          placeholder="Поиск по каталогу"
        />
      </div>

      <div className={styles.anime_list}>
        <div>
          <AnimeList
            animeList={animeList}
            isLoading={isLoading}
            status={status}
          />
        </div>

        <div>
          <Filter />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
