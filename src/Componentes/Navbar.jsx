import style from "./style/Navbar.module.css";
import lupa from "../assets/navbar/lupa.png";
import logo from "../assets/navbar/logo.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";

function Navbar() {
  const pesquisaRef = useRef(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("Categoria não encontrada!");

  const normalizeInput = (input) => {
    return input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  const pesquisarCategoria = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();

      const pesquisa = normalizeInput(pesquisaRef.current.value);

      const rotas = {
        cachorro: "/cachorro",
        gato: "/gato",
        passaro: "/passaro",
        peixe: "/peixe",
      };

      if (rotas[pesquisa]) {
        setShow(false);
        navigate(rotas[pesquisa]);
      } else {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <nav id={style.nav}>
        <div id={style.container_navbar}>
          <h1 id={style.nome}>pethealth</h1>
          <img id={style.logo} src={logo} alt="" />
          <div id={style.container_pesquisa}>
            <img id={style.img_lupa} src={lupa} alt="lupa" />
            <input
              id={style.barra_pesquisa}
              type="text"
              placeholder="Qual o seu pet?"
              ref={pesquisaRef}
              onKeyPress={pesquisarCategoria}
              autoComplete="off"
            />
          </div>
        </div>
        <CSSTransition
          in={show}
          timeout={300}
          classNames={{
            enter: style.fade_enter,
            enterActive: style.fade_enter_active,
            exit: style.fade_exit,
            exitActive: style.fade_exit_active,
          }}
          unmountOnExit
        >
          <p id={style.erro}>{error}</p>
        </CSSTransition>
      </nav>
    </>
  );
}

export default Navbar;
