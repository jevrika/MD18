import { Suspense } from "react"
import BlogList from "@/src/components/BlogList/BlogList"
import Loading from "../loading"
import styles from './page.module.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog List | All Blogs',
}

const Blogs = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.hrText} data-content="Blog List" ></hr>

      <Suspense fallback={<Loading />}>
        <div className={styles.blogListWrapper}><BlogList blogsToShow={0} /></div>
      </Suspense>

    </div>
  )
}

export default Blogs