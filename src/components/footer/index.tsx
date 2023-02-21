import React from "react";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp} from "react-icons/ai";

import "./style.css";

export default function Footer(){

  const item = "</Freelas>";
  return (
    <footer className="containerFooter">
      <div className="containerTextFooter">
        <span className="textFooter">
          Feito com {" "}
          <span className="heartFooter">
          ❤ {" "}
          </span>
          por {item}
        </span>
      </div>
      <div className="containerSocialMediaFooterList">
        <a href="#" className="socialMediaFooterItem"> 
          <AiOutlineInstagram color="#fff" width={50}/>
        </a>
        <a href="#" className="socialMediaFooterItem"> 
          <AiOutlineLinkedin color="#fff"/> 
        </a>         
        <a href="#" className="socialMediaFooterItem"> 
          <AiOutlineWhatsApp color="#fff"/>
        </a>         
      </div>
    </footer>
  );
}