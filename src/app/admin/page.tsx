import { getServerSession } from 'next-auth'
import React, { Suspense } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import styles from './page.module.css'
import BlogList from '@/src/components/BlogList/BlogList'
import Loading from '../loading'


const AdminPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className={styles.wrapper}>
      <hr className={styles.hrText} data-content={`Hi, ${session!.user.username}`}></hr>

      <Suspense fallback={<Loading />}>
        <div className={styles.blogListWrapper}><BlogList blogsToShow={0} /></div>
      </Suspense>
      
    </div>
  )
}

export default AdminPage