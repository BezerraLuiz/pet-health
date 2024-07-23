import style from './style/Cachorro.module.css';
import Navbar from "../Componentes/Navbar";
import cachorro from '../assets/cachorro/cachorro.png'
import comida from '../assets/cachorro/comidas.png'

function Cachorro() {

  return (
    <>
      <Navbar />

      <img id={style.img_cachorro} src={cachorro} alt="" />

      <div className={style.container_main}>

        <div id={style.container_margin}>

          <div className={style.container_nao_comestivel}>
            <div style={{
              marginBottom: '123px'
            }}>
              <h1 className={style.titulo}>Chocolate</h1>
              <p className={style.texto}>Possuindo a Teobromina, o alimento não é processado no pelo organismo dos caninos o que causa a intoxicação. SINTOMAS: diarréia, vômito (não se deve induzir o vômito), temperatura corpórea elevada, vontade excessiva de beber água, urina em grande quantidade e arritmia cardíaca. O QUE FAZER? Dar carvão ativado para impedir a absorção das substâncias tóxicas.</p>
              {/* <ul className={style.lista}>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
            </div>
            <div className={style.container_circle}>
              <img className={style.img_nao_comestivel} src={comida} alt="" />
            </div>
          </div>

          <div className={style.container_nao_comestivel}>
            <div style={{
              marginBottom: '123px'
            }}>
              <h1 className={style.titulo}>Titulo</h1>
              <p className={style.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul className={style.lista}>
                <li>Cachorro</li>
                <li>Gato</li>
                <li>Pássaro</li>
              </ul>
            </div>
            <div className={style.container_circle}>
              <img className={style.img_nao_comestivel} src={comida} alt="" />
            </div>
          </div>

          <div className={style.container_nao_comestivel}>
            <div style={{
              marginBottom: '123px'
            }}>
              <h1 className={style.titulo}>Titulo</h1>
              <p className={style.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul className={style.lista}>
                <li>Cachorro</li>
                <li>Gato</li>
                <li>Pássaro</li>
              </ul>
            </div>
            <div className={style.container_circle}>
              <img className={style.img_nao_comestivel} src={comida} alt="" />
            </div>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Cachorro;