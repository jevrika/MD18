import Image from "next/legacy/image"
import styles from './BlogListByTag.module.css'
import Link from "next/link"

type Blog = {
  _id: string,
  image: string,
  title: string,
  text: string,
  tag: string
}

const getBlogByTagName = async (tagName: string) => {
  try {

    const response = await fetch(`http://localhost:3000/api/blogs/tags/${tagName}`)
    return response.json()

  } catch (error) {

    console.log('Failed to get blog by passed tag name', error)
    throw new Error(`Failed to get blog by passed tag name, ${error}`)

  }
}

const BlogListByTag = async ({ params }: { params: { tag: string } }) => {

  const blogs = await getBlogByTagName(params.tag)

  return (
    <>
      {blogs.map((blog: Blog) => (

        <div className={styles.cardWrapper} key={blog._id}>

          <div className={styles.imageWrapper}>
            <Image className={styles.blogImage} layout="responsive" height={500} width={500} alt="blog image" src={blog.image} />
          </div>

          <Link className={styles.link} href={`/blogs/${blog._id}`}>
            <div className={styles.textWrapper}>
              <h2 className={styles.blogTitle} > {blog.title} </h2>
              <p className={styles.blogText}  > {blog.text.slice(0, 100)}...</p>
            </div>
          </Link>
          
          <Link className={styles.blogTag} href={`http://localhost:3000/blogs/tags/${blog.tag}`}> {blog.tag} </Link>
        </div>

      ))}

      {blogs.length === 0 &&
        (
          <p> No blog posts available </p>
        )}
    </>
  )
}

export default BlogListByTag