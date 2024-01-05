import styles from './BlogDetails.module.css'
import Image from "next/legacy/image"
import { format } from "date-fns";
import CreateComment from "@/src/components/CreateComment/CreateComment";
import DeleteButton from "@/src/components/Buttons/DeleteButton/DeleteButton";
import EditButton from "@/src/components/Buttons/EditButton/EditButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/[...nextauth]/route"
import Link from "next/link";
import { IComment } from '@/src/lib/(models)/Comment';


type Comment = {
  _id: string,
  blogId: string,
  author: string,
  comment: string,
  createdAt: string
}

const getComment = async (id: string) => {
  try {

    const response = await fetch(`http://localhost:3000/api/comments/${id}`)
    return response.json()

  } catch (error) {

    throw new Error(`Failed to get blog comment, ${error}`)

  }
}

const getBlog = async (id: string) => {
  try {

    const response = await fetch(`http://localhost:3000/api/blogs/${id}`)
    return response.json()

  } catch (error) {

    console.log('Failed to get blog', error)
    throw new Error(`Failed to get blog, ${error}`)

  }
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {

  const session = await getServerSession(authOptions)
  const isAdmin = session?.user.isAdmin || false

  const blog = await getBlog(params.id);
  const comments = await getComment(params.id)

  return (
    <div className={styles.cardWrapper} >

      <div className={styles.imageWrapper}>
        <Image className={styles.blogImage} layout="responsive" height={500} width={500} alt="blog image" src={blog.image} />
      </div>

      <h2 className={styles.blogTitle} > {blog.title} </h2>
      <p className={styles.blogText} > {blog.text}</p>

      <span className={styles.blogCreatedAt}>Created at: {format(blog.createdAt, 'MMMM do, yyyy')}</span>

      <Link className={styles.blogTag} href={`http://localhost:3000/blogs/tags/${blog.tag}`}> {blog.tag} </Link>

      <Link className={styles.link} href={"/blogs"} > ← Go back to blog list</Link>
      
      <div className={styles.commentsWrapper}>

        <CreateComment blogId={blog._id} />
        <span>Comments: {comments.length}</span>

        {comments.map((comment: Comment) =>
          <div className={styles.commentWrapper} key={comment._id}>

            <span className={styles.label} > Comment Author: </span><span className={styles.commentContent}>{comment.author} </span>
            <span className={styles.label} > Comment: </span> <span className={styles.commentContent} >{comment.comment} </span>
            <span className={styles.date} > Created at: {format(comment.createdAt, 'MMMM do, yyyy HH:mm:ss')} </span>

            {isAdmin ?
              (
                <DeleteButton commentId={comment._id} />
              )
              : null
            }

          </div>
        )}

      </div>

      {isAdmin ? (
        <div className={styles.buttonWrapper}>
          <EditButton blogId={params.id} />
          <DeleteButton blogId={params.id} />
        </div>
      ) : null}

    </div>
  )
}

export default BlogDetails