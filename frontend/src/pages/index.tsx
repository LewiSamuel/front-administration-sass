import Head from 'next/head';
import style from './home.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Head>
        <title>Lewix</title>
      </Head>
      <nav className={style.topNav}>
        <Image width={100} height={100} src={"/img/logoMyDash.png"} objectFit="contain" />
        <Link href='/login'><button className="btn btn-secondary">Login</button></Link>
      </nav>
      <article className={style.banner}>
        <h1>Make a promise here</h1>
      </article>
    </>
  );
}