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
          Bienvenidos a <span className={styles.span}>NachDev´s Blog!</span>
        </h1>

        <div className={styles.grid}>
          <Link href="/projects/myProjects" className={styles.card}>
            <h3>Proyectos &rarr;</h3>
            <p>Disfruta y diviertete con los proyectos que realize!💪</p>
          </Link>

          <Link href="/learn/learningzone" className={styles.card}>
            <h3>Zona de aprendizaje &rarr;</h3>
            <p>Quieres aprender sobre las tecnologias Web?</p>
          </Link>

          <a
            href="https://github.com/nachitoxx6262"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>Aqui podras ver mis avances y mis proyectos en construcción.🚧</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ignacio-peniamaria-591865183/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>
              Estas interesado en el trabajo que realizo? Contactame y visita mi perfil.🙌
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
