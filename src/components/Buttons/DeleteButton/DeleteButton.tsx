"use client"

import { useRouter } from "next/navigation";
import Button from "../Button/Button";

type DeleteButtonProps = {
  blogId?: string
  commentId?: string;
}

const DeleteButton = ({ blogId, commentId }: DeleteButtonProps) => {

  const handleDelete = async (id: string | undefined) => {
    if (id === commentId) {
      const response = await fetch(`http://localhost:3000/api/comments/${commentId}`, {
        method: "DELETE"
      })
      if (response.ok) {

        router.refresh()
      }
    }
    if (id === blogId) {
      const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
        method: "DELETE"
      })
      if (response.ok) {

        router.push('/admin')
        router.refresh()
      }

    }
  }
  const router = useRouter();

  return (
    <Button buttonText={"Delete"} className={"delete"} buttonType={"button"} onClick={() => handleDelete(blogId || commentId)} />
  )
}

export default DeleteButton