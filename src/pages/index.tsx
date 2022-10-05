import type { NextPage } from 'next'

import { SedesForm } from "@components/."
import styles from '@styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SedesForm />
    </div>
  )
}

export default Home
