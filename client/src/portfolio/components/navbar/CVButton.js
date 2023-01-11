import React from 'react'
import download from '../../../assets/portfolio/file-download.svg'

const CVButton = () => {
	const openCV = () => {
		window.open(
			"https://drive.google.com/file/d/1zYV4Fv3erV77sGSAvXcrLDx3E_jUhYam/view?usp=sharing"
		);
	}

	return (
		<div onClick={openCV} className="flex cvbtn w-fit p-2 h-fit items-center cursor-pointer hover:drop-shadow-2xl hover:scale-110 transform duration-300 active:translate-y-2">
			<img src={download} alt="" className="w-4" />
			<div className="font-poppins whitespace-nowrap text-sm text-fontLightBlue font-semibold px-3">
				My CV
			</div>
		</div>
	);
}

export default CVButton
