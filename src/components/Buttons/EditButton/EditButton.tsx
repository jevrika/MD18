"use client"

import { useRouter } from 'next/navigation';
import Button from '../Button/Button';


type EditButtonProps = {
  blogId: string;
}

const EditButton = ({ blogId }: EditButtonProps) => {
  const router = useRouter()
  return (
    <>
      <Button buttonText={'Edit'} className={'edit'} buttonType={'button'} onClick={() => router.push(`http://localhost:3000/admin/edit/${blogId}`)} />
    </>
  )
}

export default EditButton