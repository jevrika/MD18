"use client"

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './CreateForm.module.css'

const CreateForm = () => {
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    text: '',
    tag: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
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

      await fetch('http://localhost:3000/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

      })

    } catch (error) {

      console.log('Failed to create blog', error)
      throw new Error(`Failed to create blog', ${error}`)

    }

    setFormData(({
      image: '',
      title: '',
      text: '',
      tag: '',
    }))

    router.push('/admin')
    router.refresh()

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
          <select className={styles.input} required onChange={handleChange} name="tag" value={formData.tag} >
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

        <button className={styles.button} type="submit"> Add Blog </button>

      </form>
    </div>
  )
}

export default CreateForm