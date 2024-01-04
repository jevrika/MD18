import EditForm from '@/src/components/EditForm/EditForm'
import React, { Suspense } from 'react'
import Loading from '../../loading'
import styles from './page.module.css'

export const generateMetadata = async ({ params }: { params: { id: string } }) => {

  const response = await fetch(`http://localhost:3000/api/blogs/${params.id}`)
  const blog = await response.json()

  return {
    title: `Edit | ${blog.title}`
  }
}

const Edit = async ({ params }: { params: { id: string } }) => {

  return (
    <div className={styles.wrapper}>
      <hr className={styles.hrText} data-content="Edit blog" ></hr>

      <Suspense fallback={<Loading />}>
        <div> <EditForm params={{ id: params.id }} /></div>
      </Suspense>

    </div>
  )
}

export default Edit