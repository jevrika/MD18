import { Suspense } from "react"
import Loading from "../../loading"
import styles from './page.module.css'
import BlogDetails from "@/src/components/BlogDetails/BlogDetails"

export const generateMetadata = async ({ params }: { params: { id: string } }) => {

  const response = await fetch(`http://localhost:3000/api/blogs/${params.id}`)
  const blog = await response.json()

  return {
    title: `Blog List | ${blog.title}`
  }

}

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {

  return (
    <div className={styles.wrapper}>
      <hr className={styles.hrText} data-content="Blog Details" ></hr>

      <Suspense fallback={<Loading />}>
        <div><BlogDetails params={{ id: params.id }} /></div>
      </Suspense>

    </div>
  )
}

export default BlogDetailsPage