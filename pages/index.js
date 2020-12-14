import styles from '../styles/Home.module.css'
import { Image } from 'antd';


export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div style={{ margin: "0 0 50px 0" }}>
          <h1 className={styles.title}>
            Project PDL
                    </h1>
        </div>
        <div className='logo-inicio'>
          <Image preview={false} width={400} src="/images/LogoBlue.png" />
        </div>
      </main>
    </div>
  )
}
