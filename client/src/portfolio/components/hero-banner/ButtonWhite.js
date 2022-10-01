import React from 'react'

const ButtonWhite = (props) => {
	const icon = props.icon
	const title = props.title

	return (
		<div className="flex bg-white px-3 py-2 rounded-md gap-2">
			<div className="">
				<img src={icon} alt={title} className="w-5" />
			</div>
			<div className="text-sm font-poppins text-bgDark font-semibold">{title}</div>
		</div>
	);
}

export default ButtonWhite