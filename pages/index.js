import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NachDev´s Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <span className={styles.span}>NachDev´s Blog!</span>
        </h1>

        <div className={styles.grid}>
          <a href="http://localhost:3000/projects/myProjects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Here you can see all the projects I did</p>
          </a>

          <a href="http://localhost:3000/learn/learningzone" className={styles.card}>
            <h3>Learning zone &rarr;</h3>
            <p>Do you want to learn about the latest technologies?</p>
          </a>

          <a
            href="https://github.com/nachitoxx6262"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ignacio-peniamaria-591865183/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <p>Powered by<span className={styles.span}> Ignacio Peñamaria</span></p>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
