import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [detailsDisplay, setDetailsDisplay] = useState(null);

    const toggleDetailsDisplay = (index) => {
        setDetailsDisplay(index);

        if (index !== null) {
            if (!document.body.classList.contains('overflow-hidden')) {
                document.body.classList.add('overflow-hidden');
            }
        } else {
            if (document.body.classList.contains('overflow-hidden')) {
                document.body.classList.remove('overflow-hidden');
            }
        }
    }


    return (
        <ProjectContext.Provider value={{ detailsDisplay, toggleDetailsDisplay }}>
            {children}
        </ProjectContext.Provider>
    )
}