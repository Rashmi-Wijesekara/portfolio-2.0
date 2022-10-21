import React from 'react'
import logo from '../../assets/portfolio/logo.svg'

const Footer = () => {
	return (
		<div className="bg-boxBg py-3">
			<div className="w-fit mx-auto flex flex-row">
				<div className="">
					<img src={logo} alt="logo" className="rounded-xl w-[60px] h-auto" />
				</div>
				<div className="flex flex-col font-poppins font-light justify-center ml-5">
					<div className="text-xs text-white">Designed & Built by :</div>
					<div className="text-sm text-fontLightBlue">Rashmi Wijesekara</div>
				</div>
			</div>
		</div>
	);
}

export default Footer