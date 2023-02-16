import React from "react";

import "./style.css";

type GridType = {
    title ?: string;
    text ?: string;
}

export default function Grid({title, text}:GridType){

	return (
		<div className='containerGrid2'>
			<div className='containerTitleGrid2'>
				<span className='titleGrid2'> {title} </span>
			</div>

			<div className='containerTextGrid2'>
				<span className='textGrid2'> {text} </span>
			</div>
		</div>
	);
}