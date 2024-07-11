import style from './style/Navbar.module.css';
import user from '../assets/user.png';
import lupa from '../assets/lupa.png';
import { Link } from 'react-router-dom';

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