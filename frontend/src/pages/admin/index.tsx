import Head from 'next/head';
import Image from 'next/image';
import Collection from '../../components/collection';

import style from './admin.module.scss';

export default function Login() {

  return (
    <>
      <Head>
        <title>Lewix - Admin</title>
      </Head>
      <nav className={style.nav}>
        <section className={style.container}>
          <Image width={100} height={100} src={"/img/logoMyDash.png"} objectPosition="center" objectFit="contain" />
        </section>
      </nav>

      <aside className={style.side}>
          <Collection elements={[
            <h1>testes</h1>
          ]} />
      </aside>
    </>
  );
}