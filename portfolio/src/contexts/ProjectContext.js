import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [detailsDisplay, setDetailsDisplay] = useState(null);
    const toggleDetailsDisplay = (index) => {
        setDetailsDisplay(index);
        document.body.classList.toggle('overflow-hidden')
    }
    return (
        <ProjectContext.Provider value={{detailsDisplay, toggleDetailsDisplay}}>
            {children}
        </ProjectContext.Provider>
    )
}