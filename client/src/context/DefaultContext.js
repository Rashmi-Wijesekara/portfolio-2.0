import React, {useState} from "react";

// create context
const DefaultContext = React.createContext(false)

// context provider
const DefaultProvider = ({ children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)
	const [section, setSection] = useState("")
	const [about, setAbout] = useState(false)

	const setCurrentPath_function = ()=> {
		setCurrentPath(window.location.pathname)
	}

	const setAbout_function = ()=> {
		setAbout(true)
	}

	return (
		<DefaultContext.Provider value={{
			currentPath,
			setCurrentPath_function,
			about,
			setAbout_function,
      section
		}}>
			{children}
		</DefaultContext.Provider>
	)
}

export { DefaultContext, DefaultProvider };