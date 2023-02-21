import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai";

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
          <AiOutlineWhatsApp color="#fff"/>
        </a> 
        <a href="#" className="socialMediaFooterItem"> 
          <AiFillInstagram color="#fff" width={50}/>
        </a>
        <a href="#" className="socialMediaFooterItem"> 
          <AiFillLinkedin color="#fff"/> 
        </a>     
        <a href="#" className="socialMediaFooterItem"> 
          <AiOutlineMail color="#fff"/>
        </a>      
      </div>
    </footer>
  );
}