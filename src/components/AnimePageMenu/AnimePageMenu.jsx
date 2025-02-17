import { useState } from "react"
import styles from './AnimePageMenu.module.scss'

const menuItems = [
  {
    id: 1,
    text: 'Эпизоды'
  },

  {
    id: 2,
    text: 'Связанное'
  },

  {
    id: 3,
    text: 'Работали над релизом'
  }
]

const AnimePageMenu = () => {
    const [activeMenu, setActiveMenu] = useState(1)
  return (
    <div className={styles.menu}>
    <ul className={styles.menu_list}>
      {menuItems.map(element => <li key={element.id}>
        <button className={activeMenu !== element.id ? styles.link : styles.active} onClick={()=> setActiveMenu(element.id)}> 
          {element.text}
        </button>
      </li>)}
    </ul>
  </div>
  )
}

export default AnimePageMenu