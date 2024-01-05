import Image from "next/legacy/image"
import styles from './BlogList.module.css'
import Link from "next/link"
import { format } from "date-fns"
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/src/app/api/auth/[...nextauth]/route"
import EditButton from "../Buttons/EditButton/EditButton"

type Blog = {
  _id: string,
  image: string,
  title: string,
  text: string,
  tag: string,
  createdAt: string
}

type BlogListProps = {
  blogsToShow: number
}

const getBlogs = async () => {
  try {

    const response = await fetch('http://localhost:3000/api/blogs')
    return response.json()

  } catch (error) {

    console.log('Failed to get blogs', error)
    throw new Error(`Failed to get blogs, ${error}`)

  }
}

const BlogList = async ({ blogsToShow }: BlogListProps) => {

  const session = await getServerSession(authOptions)
  const isAdmin = session?.user.isAdmin || false

  const blogs = await getBlogs();

  const blogShow = blogsToShow === 0 ? blogs : blogs.slice(0, blogsToShow)

  return (
    <>
      {blogShow.map((blog: Blog) => (
        <div className={styles.cardWrapper} key={blog._id}>

          <div className={styles.imageWrapper}>
            <Image className={styles.blogImage} layout="responsive" height={400} width={400} alt="Blog image" src={blog.image} />
            <p className={styles.date}>Created at: {format(blog.createdAt, 'MMMM do, yyyy')}</p>
          </div>

          <Link className={styles.link} href={`/blogs/${blog._id}`}>
            <div className={styles.textWrapper}>
              <h2 className={styles.blogTitle} > {blog.title} </h2>
              <p className={styles.blogText}  > {blog.text.slice(0, 100)}...</p>
            </div>
          </Link>

          <div className={styles.tagWrapper}>
            <Link className={styles.blogTag} href={`http://localhost:3000/blogs/tags/${blog.tag}`}> {blog.tag} </Link>
          </div>

          {isAdmin ?
            (
              <div className={styles.buttonWrapper}>
                <EditButton blogId={blog._id} />
                <DeleteButton blogId={blog._id} />
              </div>
            )

            : null
          }

        </div>
      ))}

      <div className={styles.wrapper}>
        {blogs.length === 0 && (
          <p className={styles.heading}> No blog posts available </p>
        )}
      </div>
    </>
  )
}

export default BlogList