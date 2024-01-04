"use client"

import Link from "next/link"
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation';
import { signOut } from "next-auth/react"
import Button from "../Buttons/Button/Button";

type NavbarProps = {
  isAdmin: boolean
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const pathname = usePathname();


  return (
    <>
      {isAdmin === false ? (
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <Link className={pathname == "/" ? styles.active : styles.link} href={'/'} > Home </Link>
            <Link href={'/blogs'} className={pathname == "/blogs" ? styles.active : styles.link}> Blogs</Link>
            <Link className={pathname == "/admin" ? styles.active : styles.link} href={'/admin'} > Admin </Link>
          </nav>
        </div>
      ) :
        (<div className={styles.container}>
          <nav className={styles.navbar}>
            <Link className={pathname == "/admin/create" ? styles.active : styles.link} href={'/admin/create'} > Create new blog</Link>
            <Button buttonText={"Sign Out"} className={"signOut"} buttonType={"button"} onClick={() => signOut()} />
          </nav>
        </div>
        )}
    </>
  )
}

export default Navbar