import { Suspense } from "react"
import Loading from "../../../loading"
import BlogListByTag from "@/src/components/BlogListByTag/BlogListByTag"
import styles from './page.module.css'

export const generateMetadata = async ({ params }: { params: { tag: string } }) => {
  return {
    title: `Blog List | ${params.tag}`
  }
}


const TagPage = ({ params }: { params: { tag: string } }) => {

  return (
    <div className={styles.wrapper}>
      <hr className={styles.hrText} data-content={`Blogs by tag - ${params.tag}`} ></hr>

      <Suspense fallback={<Loading />}>
        <div className={styles.blogListWrapper} ><BlogListByTag params={{ tag: params.tag }} /></div>
      </Suspense>
      
    </div>
  )
}

export default TagPage