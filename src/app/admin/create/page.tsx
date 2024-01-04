import CreateForm from '@/src/components/CreateForm/CreateForm'
import React, { Suspense } from 'react'
import Loading from '../loading'
import styles from './page.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Create blog ',
}


const AdminPage = async () => {
  return (
    
    <div className={styles.wrapper}>
      <hr className={styles.hrText} data-content="Create new blog" ></hr>

      <Suspense fallback={<Loading />}>
        <div> <CreateForm /> </div>
      </Suspense>
      
    </div>
  )
}

export default AdminPage