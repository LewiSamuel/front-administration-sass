import Head from 'next/head';
import style from './login.module.scss';
import Link from 'next/link';
import Image from 'next/image';

// import LogoMyDash from '../../img/logoMyDash.png'; //'/img/logo-my-dash.png';

export default function Login() {

  return (
    <>
      <Head>
        <title>Lewix - Login</title>
      </Head>
      <div className={style.global}>
        <section className={style.fullLogin}>
          <article className={style.tableLogin}>
            <h1>
              <Link href='/'>
                <Image width={100} height={100} src={"/img/logoMyDash.png"} objectFit="contain" />
              </Link>
            </h1>
            
            <div className={style.inputField}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="jhon.doe@email.com"/>
            </div>

            <div className={style.inputField}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="*********"/>
            </div>

            <button className='btn btn-primary' type="submit">Entrar</button>

          </article>
          <article className={style.screen}></article>
        </section>
      </div>
    </>
  );
}