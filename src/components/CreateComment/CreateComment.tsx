"use client"

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './CreateComment.module.css'
import Button from '../Buttons/Button/Button'

type BlogIdParams = {
  blogId: string
}

const CreateComment = ({ blogId }: BlogIdParams) => {
  const router = useRouter()

  const [commentData, setCommentData] = useState({
    blogId: blogId,
    author: '',
    comment: ''

  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: FormEvent) => {
   e.preventDefault();

    try {

      await fetch('http://localhost:3000/api/comments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentData)

      })

    } catch (error) {

      console.log('Failed to create comment', error)
      throw new Error(`Failed to create comment, ${error}`)

    }

    setCommentData(({
      blogId: blogId,
      author: '',
      comment: ''

    }))

    router.refresh()

  }

  return (
    <form method="post" onSubmit={handleSubmit} className={styles.form}>

      <input className={styles.input} placeholder='comment author' required type="text" name="author" onChange={handleChange} value={commentData.author} />
      <input className={styles.input} placeholder='comment...' required type="text" name="comment" onChange={handleChange} value={commentData.comment} />

      <Button buttonText={'Add Coment'} className={'addComment'} buttonType={'submit'} />
    </form>
  )
}


export default CreateComment