import React, {useState} from "react";

// create context
const DefaultContext = React.createContext(false)

// context provider
const DefaultProvider = ({ children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)
	// const [section, setSection] = useState("")
	const [about, setAbout] = useState(false)
	const [skills, setSkills] = useState(false)
	const [projects, setProjects] = useState(false)
	const [contact, setContact] = useState(false)

	const setCurrentPath_function = ()=> {
		setCurrentPath(window.location.pathname)
	}

	const setAbout_function = ()=> {
		setAbout(!about)
	}
	const setSkills_function = ()=> {
		setSkills(!skills)
	}
	const setProjects_function = ()=> {
    setProjects(!projects)
	}
	const setContact_function = ()=> {
    setContact(!contact)
	}

	return (
		<DefaultContext.Provider value={{
			currentPath,
			setCurrentPath_function,
			about,
			setAbout_function,
			skills,
      setSkills_function,
      projects,
			setProjects_function,
      contact,
      setContact_function,
      // section
		}}>
			{children}
		</DefaultContext.Provider>
	)
}

export { DefaultContext, DefaultProvider };