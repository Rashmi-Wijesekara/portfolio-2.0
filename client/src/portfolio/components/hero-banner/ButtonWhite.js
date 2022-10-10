import React from 'react'

const ButtonWhite = (props) => {
	const icon = props.icon
	const title = props.title

	return (
		<div onClick={props.onClick} className="flex bg-white px-3 py-2 w-fit rounded-md gap-2 cursor-pointer hover:drop-shadow-2xl hover:scale-110 transform duration-300 active:translate-y-2">
			<div className="">
				<img src={icon} alt={title} className="w-5" />
			</div>

			
			{title && (<div className="text-sm font-poppins text-bgDark font-semibold">
				{title}
			</div>)}
		</div>
	);
}

export default ButtonWhite