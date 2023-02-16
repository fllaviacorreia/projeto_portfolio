import React from "react";
import Button from "@/components/elements/button";
import logo from "@/assets/logo.png";
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
							<a className="linkItem" href="#overview">
                Overview
							</a>
						</li>
						<li className="itemList">
							<a className="linkItem" href="#courses">
                Cursos
							</a>
						</li>

						<li className="itemList">
							<a className="linkItem" href="#aboutus">
                Sobre nós
							</a>
						</li>
						<li className="itemList">
							<a className="linkItem" href="#contact">
                Contate-nos
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="containerRight">
				<Button title="Fale conosco" typeButton="input-transparent-button"/>
			</div>
		</div>
	);
}
