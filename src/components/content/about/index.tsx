import React from "react";
import logo from "@/assets/logo.svg";
import "./style.css";

export default function About(){


  return(
    <section id="about" className="containerAbout">        
      <img className="imgAbout" src={logo} alt="logo from site"/>
      <div className="containerTextAbout">
        <h1 className="titleAbout">Sobre nós</h1>
        <p className="textAbout">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. 
        </p>
      </div>
    </section>
  );
}