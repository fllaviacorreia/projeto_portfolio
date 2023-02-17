import React from "react";
import Button from "@/components/elements/button";
import logo from "@/assets/logo.svg";
import "./style.css";

export default function Header() {
  return (
    <div className="containerHeader">
      <div className="containerLeft">
        {/* logo */}
        <div className="containerLogo">
          <img className="imageLogo" alt="logo da empresa" src={logo} />
        </div>

        {/* lista */}
        <div className="containerList">
          <ul className="listItems">
            <li className="itemList">
              <a className="linkItem" href="#home">
                Início
              </a>
            </li>
            <li className="itemList">
              <a className="linkItem" href="#about">
                Sobre
              </a>
            </li>
            <li className="itemList">
              <a className="linkItem" href="#services">
                Serviços
              </a>
            </li>
            <li className="itemList">
              <a className="linkItem" href="#projects">
                Projetos
              </a>
            </li>
            <li className="itemList">
              <a className="linkItem" href="#team">
                Equipe
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="containerRight">
        <Button title="Contate-nos" typeButton="input-button" onClick={ () => alert("Hello")} />
      </div>
    </div>
  );
}
