import Head from 'next/head';
import styles from './MainLayout.module.css';
import Navbar from '../Navbar';

export default function MainLayout({children}) {
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Home app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>   
            <main className={styles.main}>

                {children}
    
            </main>
        </div>
      );
}