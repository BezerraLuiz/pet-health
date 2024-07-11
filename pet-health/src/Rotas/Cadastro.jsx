import style from './style/Cadastro.module.css'
import Footer from '../Componentes/Footer'
import fish from '../assets/cadastro/fish.png'
import alga from '../assets/cadastro/algae.png'
import bubble from '../assets/cadastro/bubbles.png'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function Cadastro() {

  const senhaRef = useRef(null);
  const confirmarSenhaRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  
  const verificarSenha = (e) => {
    e.preventDefault();

    const senha = senhaRef.current.value;
    const confirmarSenha = confirmarSenhaRef.current.value;

    console.log('Senha: ' + senha);
    console.log('Senha confirmada: ' + confirmarSenha);
    
    if (senha == confirmarSenha) {
      navigate('/login');
    } else {
      confirmarSenhaRef.current.value = '';
      setError('Insira as senhas iguais!');   
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const cancelarCadastro = () => {
    navigate('/login');
  };
    
  return(
    <>
      <div id={style.container_main}>
        <div id={style.container_cadastro}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}><h1 id={style.texto}>Cadastro</h1></div>
          <form id={style.form} onSubmit={verificarSenha} action=''>
            <div className={style.container_campos}>
              <div className={style.container_input}>
                <label className={style.label} htmlFor="">Nome Completo</label>
                <input className={style.input} type="text" autoComplete='off' required/>
              </div>
              <div className={style.container_input}>
                <label className={style.label} htmlFor="">E-mail</label>
                <input className={style.input} type="text" autoComplete='off' required/>
              </div>
            </div>
            <div style={{
              marginTop: '30px'
            }} className={style.container_campos}>
              <div className={style.container_input}>
                <label className={style.label} htmlFor="">Senha</label>
                <input className={style.input} id='senha' ref={senhaRef} type="password" autoComplete='off' required/>
              </div>
              <div className={style.container_input}>
                <label className={style.label} htmlFor="">Confirmar Senha</label>
                <input className={style.input} id='confirmar-senha' ref={confirmarSenhaRef} type="password" autoComplete='off' required/>
              </div>
            </div>
            <div style={{
              marginTop: '30px'
            }} className={style.container_campos}>
              <div className={style.container_input}>
                <button className={style.button} onClick={cancelarCadastro}>Cancelar</button>
              </div>
              <div className={style.container_input}>
                <button className={style.button}>Criar Conta</button>
              </div>
            </div>
            <CSSTransition
              in={showError}
              timeout={300}
              classNames={{
                enter: style.fadeEnter,
                enterActive: style.fadeEnterActive,
                exit: style.fadeExit,
                exitActive: style.fadeExitActive,
              }}
              unmountOnExit
            >
              <p id={style.erro}>{error}</p>
            </CSSTransition>
          </form>
        </div>
      </div>

      <img className={style.img} id={style.fish_um} src={fish} alt="" />
      <img className={style.img} id={style.fish_dois} src={fish} alt="" />
      <img className={style.img} id={style.alga} src={alga} alt="" />
      <img className={style.img} id={style.bubble} src={bubble} alt="" />

      <Footer />
    </>
  )
};

export default Cadastro;