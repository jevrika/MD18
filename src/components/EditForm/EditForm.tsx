"use client"

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './EditForm.module.css'
import { useRouter } from 'next/navigation'

import Button from '../Buttons/Button/Button'


const EditForm = ({ params }: { params: { id: string } }) => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    text: '',
    tag: '',
  })

  const getBlog = async (id: string) => {
    try {

      const response = await fetch(`http://localhost:3000/api/blogs/${id}`)
      return response.json()

    } catch (error) {

      console.log('Failed to get blog', error)
      throw new Error(`Failed to get blog, ${error}`)

    }
  }

  useEffect(() => {
    // to laod data once
    const getBlogData = async () => {

      const blog = await getBlog(params.id)

      setFormData(() => ({
        image: blog.image,
        title: blog.title,
        text: blog.text,
        tag: blog.tag,
      }));
    }

    getBlogData()
  }, [params.id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {

      await fetch(`http://localhost:3000/api/blogs/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

    } catch (error) {

      console.log('Failed to get blog', error)
      throw new Error(`Failed to get blog, ${error}`)

    }

    setFormData(({
      image: '',
      title: '',
      text: '',
      tag: '',
    }))

    router.push(`/blogs/${params.id}`)

  }

  const handleClick = () => {
    router.push('/admin')
  }

  return (
    <div className={styles.container}>

      <form className={styles.form} method="post" onSubmit={handleSubmit}>

        <label className={styles.label}>
          Blog Image
          <input placeholder="insert image for your blog..." className={styles.input} required type="text" name="image" onChange={handleChange} value={formData.image} />
        </label>

        <label className={styles.label}>
          Blog Title
          <input placeholder="write title for your blog..." className={styles.input} required type="text" name="title" onChange={handleChange} value={formData.title} />
        </label>

        <label className={styles.label} >
          Blog Text
          <input placeholder="write text for your blog" className={styles.input} required type="text" name="text" onChange={handleChange} value={formData.text} />
        </label>

        <label className={styles.label} >
          Blog Tag
          <select className={styles.input} required name="tag" onChange={handleChange} value={formData.tag} >
            <option value='' > Choose tag for your blog </option>
            <option value='Health'> Health </option>
            <option value='Education'> Education </option>
            <option value='Gaming'> Gaming </option>
            <option value='Sport'> Sport </option>
            <option value='Technology'> Technology </option>
            <option value='Space'> Space </option>
            <option value='Travel'> Travel </option>
            <option value='Food'> Food </option>
          </select>
        </label>
        
        <div className={styles.buttonWrapper}>
          <Button buttonText={'Update Blog'} className={'update'} buttonType={'submit'} />
          <Button buttonText={'Go Back'} className={'goBack'} buttonType={'button'} onClick={()=> handleClick} />
        </div>
      </form>
    </div>
  )
}

export default EditForm
