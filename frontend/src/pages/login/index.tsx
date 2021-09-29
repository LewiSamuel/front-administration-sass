import Head from 'next/head';
import style from './login.module.scss';
import Link from 'next/link';

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
                <b>Minha Logo</b>
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