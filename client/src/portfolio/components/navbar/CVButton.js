import React from 'react'
import download from '../../../assets/portfolio/file-download.svg'

const CVButton = () => {
	return (
		<div className="flex cvbtn w-fit p-2 h-fit items-center">
			<img src={download} alt="" className="w-4" />
			<div className="font-poppins whitespace-nowrap text-sm text-fontLightBlue font-semibold px-3">
				My CV
			</div>
		</div>
	);
}

export default CVButton