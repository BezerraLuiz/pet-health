import style from './style/Navbar.module.css';
import user from '../assets/user.png';
import lupa from '../assets/lupa.png';

function Navbar() {

  return (
    <>
      <nav id={style.nav}>
        <div id={ style.container_navbar }>
          <h1 id={ style.nome }>pethealth</h1>
          <div id={ style.container_pesquisa }>
            <img id={ style.img_lupa } src={ lupa } alt="lupa" />
            <input id={ style.barra_pesquisa } type="text" placeholder='O que seu pet comeu?'/>
          </div>
          <div style={{
            display: 'flex'
          }}>
            <img id={ style.img_user } src={ user } alt="user" />
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <p className={ style.text_user }>Entrar</p>
              <p className={ style.text_user } style={{
                marginTop: '5px',
                fontWeight: 600
              }}>Cadastrar-se</p>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '60px'
        }}>
          <h2 className={ style.categorias }>Cachorro</h2>
          <h2 className={ style.categorias }>Gato</h2>
          <h2 className={ style.categorias }>Pássaro</h2>
          <h2 className={ style.categorias }>Peixe</h2>
        </div>
      </nav>  
    </>
  )
};

export default Navbar;