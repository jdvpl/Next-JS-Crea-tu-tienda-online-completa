import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main className={styles.main}>
        <h2>Home</h2>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/xbox/fifa22">
          <a>Fifa 22</a>
        </Link>
      </main>

    
    </div>
  )
}
