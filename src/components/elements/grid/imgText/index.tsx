import React from "react";
import "./style.css";
type GridType = {
    title ?: string;
    image ?: string;
}
export default function Grid({title, image}:GridType){

	return (
		<div className='containerGrid1'>
			<div className='containerImageGrid1'>
				<img alt="icon" src={image} className="imageGrid1"/>
			</div>
			<div className='containerTitleGrid1'>
				<span className='titleGrid1'> {title} </span>
			</div>
		</div>
	);
}