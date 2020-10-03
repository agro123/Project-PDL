import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Project Reico
        </h1>
        <p className={styles.description}>
            <a href="/page1/hello" target="_blank">ir al inicio</a>
        </p>
      </main>

    </div>
  )
}
