import Link from "next/link"
import styles from './not-found.module.css'

function NotFound() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>There was a problem.</h2>
      <p className={styles.text}>We could not find page you were looking for</p>
      <p className={styles.linkText} > Go to <Link className={styles.link} href={'/blogs'}> blog list</Link></p>
    </main>
  )
}

export default NotFound