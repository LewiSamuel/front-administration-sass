import Head from 'next/head';
import style from './home.module.scss';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>Lewix</title>
      </Head>
      <nav className={style.topNav}>
        <b>Minha Logo</b>
        <Link href='/login'><button className="btn btn-secondary">Login</button></Link>
      </nav>
      <article className={style.banner}>
        <h1>Make a promise here</h1>
      </article>
    </>
  );
}