import React from "react";

import imgHome from "@/assets/img-home.jpg";

import "./style.css";

export default function Home(){
  return (
    <section id="home" className="containerHome">
      <div className="containerTextHome">
        <div className="containerTitleHome">
         
          <span className="titleWelcome">Welcome to</span>
          <span className="titleFreelas">{"</Freelas>"}</span>
          
        </div>
        <div className="containerText">
          <p className="textHome">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

      </div>
      <div className="containerImageHome">
        <figure className="figureImageHome">
          <img className="imgHome" src={imgHome} alt="developmenting an app"/>
          <figcaption>
            <a href="https://www.pexels.com/pt-br/foto/foto-de-close-up-de-pessoa-digitando-no-laptop-1181675/">Foto de Christina Morillo</a>
        
          </figcaption>
        </figure>
      </div>
    </section>
  );
}