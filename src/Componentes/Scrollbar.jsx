import { useEffect, useState } from 'react';
import style from './style/Scrollbar.module.css'

function Scrollbar() {
 
  const [circUmCor, setCircUmCor] = useState('');
  const [circDoisCor, setCircDoisCor] = useState('');
  const [circTresCor, setCircTresCor] = useState('');

  useEffect(() => {
    const elementos = document.querySelectorAll('.div');

    const primeiro = document.querySelector(`#${style.back1}`);
    const segundo = document.querySelector(`#${style.back2}`);
    const terceiro = document.querySelector(`#${style.back3}`);

    const options = {
      threshold : 0.1
    }

    const options2 = {
      threshold : 0.9
    }

    const observador = new IntersectionObserver( (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (target.id == 'div1') {
          setCircUmCor(entry.isIntersecting ? '#343434' : '');
        } else if (target.id == 'div2') {
          setCircDoisCor(entry.isIntersecting ? '#343434' : '');
        } else if (target.id == 'div3') {
          setCircTresCor(entry.isIntersecting ? '#343434' : '');
        };
      });
    }, options);

    const observador2 = new IntersectionObserver( (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (target.id == 'div1') {
          primeiro.style.opacity = 1;
          segundo.style.opacity = 0;
          terceiro.style.opacity = 0;
        } else if (target.id == 'div2') {
          primeiro.style.opacity = 0;
          segundo.style.opacity = 1;
          terceiro.style.opacity = 0;
        } else if (target.id == 'div3') {
          primeiro.style.opacity = 0;
          segundo.style.opacity = 0;
          terceiro.style.opacity = 1;
        };
      });
    }, options2);

    elementos.forEach( (el) => observador.observe(el));
    elementos.forEach( (el) => observador2.observe(el));
  }, []);

  return(
    <>
      <div id={ style.container_scroll }>
        <div id={ style.back1 } style={{
          backgroundColor: circUmCor
        }}></div>
        <div id={ style.circulo1 }></div>
        <div id={ style.back2 } style={{
          backgroundColor: circDoisCor
        }}></div>
        <div id={ style.circulo2 } style={{
          marginTop: '10px',
        }}></div>
        <div id={ style.back3 } style={{
          backgroundColor: circTresCor
        }}></div>
        <div id={ style.circulo3 }></div>
      </div>
    </>
  )
};

export default Scrollbar;