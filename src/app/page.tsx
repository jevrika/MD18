import styles from './page.module.css'
import BlogList from '../components/BlogList/BlogList'
import Loading from './(BlogList)/loading'
import { Suspense } from 'react'


const Dashboard = async () => {

  return (
    <div className={styles.container}>
      <hr className={styles.hrText} data-content="Latest Blogs" ></hr>

      <Suspense fallback= {<Loading />}>
        <div className={styles.blogListWrapper}><BlogList blogsToShow={4} /></div>
      </Suspense>

    </div>
  )
}

export default Dashboard