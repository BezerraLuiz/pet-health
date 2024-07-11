import style from './style/Login.module.css';
import gato from '../assets/login/cat.png'
import cachorro from '../assets/login/dog.png'
import Footer from '../Componentes/Footer.jsx'
import { Link } from 'react-router-dom';

function Login() {

  return (
    <>
      <div id={style.container_divisor}>
        <div id={style.container_form}>
          <h1 id={style.texto_login}>LOGIN</h1>
          <form id={style.form_login} action="">
            <div className={style.container_input}>
              <label className={style.label} htmlFor="">E-mail</label>
              <input className={style.input} type="text" placeholder='@mail.com' required/>
            </div>
            <div className={style.container_input}>
              <label className={style.label} htmlFor="">Senha</label>
              <input className={style.input} type="password" placeholder='Senha@1234' required/>
            </div>
            <div className={style.container_action}>
              <input id={style.check} type="checkbox" />
              <label className={style.label} style={{
                fontSize: '14px',
                fontWeight: 'bold'
              }} htmlFor="">Lembrar Senha</label>
              <Link className={style.label} id={style.esqueceu_senha} style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginLeft: '80px'
              }}>Esqueceu a senha?</Link>
            </div>
            <button id={style.btn}>Entrar</button>
            <div className={style.container_action}>
              <p className={style.label}>Não possui conta?</p>
              <Link className={style.label} id={style.cadastrar} to={`/cadastrar`} style={{
                fontWeight: 'bold'
              }}>Cadastrar-se</Link>
            </div>
          </form>
        </div>
      </div>


      <div id={style.container_main}>
        <div id={style.container_nome}>
          <h1 className={style.titulo} style={{
            fontSize: '100px'
          }}>Pet Health</h1>
          <h3 className={style.titulo} id={style.slogan}>Sempre ao lado do seu pet.</h3>
        </div>
        <div id={style.container_img}>
          <img className={style.img_animal} src={cachorro} alt="" />
          <img className={style.img_animal} src={gato} alt="" />
        </div>
      </div>

      <Footer />
    </>
  )
};

export default Login;