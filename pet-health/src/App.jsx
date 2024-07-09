import style from './App.module.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import { Outlet } from 'react-router'
import Scrollbar from './Componentes/Scrollbar'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const elementos = document.querySelectorAll('.div');

    const img = document.querySelector('#img_effect');
    const textImg = document.querySelector('#text_img_effect');
    const ttLastOne = document.querySelector('#last_one_tittle');
    const txtLastOne = document.querySelector('#last_one_text');

    const options = {
      threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (target.id == 'div1') {
          img.style.opacity = '0'
          img.style.transform = 'translateX(-100%)'

          textImg.style.opacity = '0'
          textImg.style.transform = 'translateX(100%)'

          ttLastOne.style.opacity = '0'
          ttLastOne.style.transform = 'translateX(-100%)'

          txtLastOne.style.opacity = '0'
          txtLastOne.style.transform = 'translateX(100%)'
        } else if (target.id == 'div2') {
          img.style.opacity = '1'
          img.style.transform = 'translateX(0)'

          textImg.style.opacity = '1'
          textImg.style.transform = 'translateX(0)'

          ttLastOne.style.opacity = '0'
          ttLastOne.style.transform = 'translateX(-100%)'

          txtLastOne.style.opacity = '0'
          txtLastOne.style.transform = 'translateX(100%)'
        } else if (target.id == 'div3') {
          img.style.opacity = '0'
          img.style.transform = 'translateX(-100%)'

          textImg.style.opacity = '0'
          textImg.style.transform = 'translateX(100%)'

          ttLastOne.style.opacity = '1'
          ttLastOne.style.transform = 'translateX(0)'

          txtLastOne.style.opacity = '1'
          txtLastOne.style.transform = 'translateX(0)'
        }
      });
    }, options);

    elementos.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Outlet />
      <Navbar />

      <Scrollbar />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }} className='div' id='div1'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '200px 50px 50px 50px'
        }}>
          <h1 className={style.titulo}>O que é a Pet Health?</h1>
          <div style={{
            width: '430px'
          }}>
            <p className={style.texto}>A PetHealth é uma plataforma dedicada ao bem-estar e à saúde dos seus animais de estimação. Nosso objetivo é fornecer informações detalhadas e precisas sobre como cuidar de seus pets, especialmente em situações de emergência, como quando ingerem algo que não deveriam.</p>
            <p className={style.texto}>Na PetHealth, você encontrará uma lista abrangente de alimentos e substâncias prejudiciais para diferentes categorias de animais, juntamente com orientações sobre os cuidados imediatos que devem ser tomados para minimizar os riscos à saúde do seu pet até que ele possa ser levado a um profissional veterinário.</p>
            <p className={style.texto}>Além de identificar os alimentos e substâncias perigosas, oferecemos orientações claras e práticas sobre os cuidados imediatos que devem ser tomados para minimizar os riscos à saúde do seu pet. Nosso conteúdo inclui instruções passo a passo sobre o que fazer em casos de ingestão acidental, ajudando a prolongar a segurança do seu animal até que ele possa receber atendimento veterinário adequado.</p>
          </div>
        </div>
        <img style={{
          margin: '150px 10px 10px 10px',
          width: '600px',
          height: '600px'
        }} src={img1} alt="" />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }} className='div' id='div2'>
        <img style={{
          margin: '110px 10px 10px 10px',
          width: '600px',
          height: '600px'
        }} className={style.effect_left} id='img_effect' src={img2} alt="" />
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          margin: '50px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }} className={style.effect_right} id='text_img_effect'>
            <h1 className={style.titulo}>Nosso Objetivo?</h1>
            <div style={{
              width: '430px'
            }}>
              <p className={style.texto}>Nossa missão é capacitar donos de pets com o conhecimento necessário para agir rapidamente em situações críticas, garantindo que seus animais tenham a melhor chance de recuperação. Através de conteúdo educativo e ferramentas personalizadas, a PetHealth é seu parceiro confiável na promoção de uma vida longa e saudável para seus queridos companheiros.</p>
              <p className={style.texto}>Através de nosso conteúdo educativo, oferecemos uma vasta gama de informações que vão desde a prevenção de acidentes até os cuidados essenciais durante uma crise. Nossos artigos são escritos por especialistas e revisados periodicamente para garantir que você receba as orientações mais precisas e atualizadas.</p>
              <p className={style.texto}>Além do conteúdo informativo, desenvolvemos ferramentas personalizadas para atender às necessidades específicas de cada pet e dono. Nossos recursos incluem guias de primeiros socorros, checklists de emergência, e alertas personalizados que podem ser configurados para diferentes tipos de animais e situações de risco.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '150px',
        margin: '110px 50px 130px 50px'
      }} className='div' id='div3'>
        <div className={style.effect_left} id='last_one_tittle' style={{
          marginTop: '90px'
        }}>
          <h1 className={style.titulo} style={{
            fontSize: '100px'
          }}>Pet Health</h1>
          <h3 className={style.titulo} id={style.slogan}>Sempre ao lado do seu pet.</h3>
        </div>
        <div className={ style.effect_right } id='last_one_text' style={{
          width: '500px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h1 className={style.titulo}>Lembre-se</h1>
            <p className={style.texto} style={{
              fontSize: '30px'
            }}>Queremos lhe ajudar a ganhar tempo em casos de emergência, leve sempre seu bichinho para a clínica veterinária mais próxima.</p>
          </div>
          <div style={{
            marginTop: '50px'
          }}>
            <h1 className={style.titulo}>Login</h1>
            <p className={style.texto} style={{
              fontSize: '30px'
            }}>Cadastre-se e entre na sua conta para ficar por dentro de novos itens e categorias adicionadas ao site.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
