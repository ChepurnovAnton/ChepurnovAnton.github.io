import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { ChevronRight } from 'lucide-react'
import styles from './Breadcrumbs.module.scss'
import type { RootState } from '../../redux-toolkit/store'

const Breadcrumbs = () => {
  const location = useLocation()
  const [namePath, setNamePath] = useState('')


  const name = useSelector((state: RootState) => state.currentPage.currentPage)
  const pathNames = location.pathname.split('/')

  useEffect(() => {
    setNamePath(pathNames[pathNames.length - 1] ? name : '')
  }, [name, pathNames])

  return (
    <div className={styles.breadcrumbs}>
      <Link to={'/'}>Каталог</Link>
      <ChevronRight size={15} />
      {namePath}
    </div>
  )
}

export default Breadcrumbs
