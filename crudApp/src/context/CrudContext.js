import React, { useContext } from "react";

const CrudContext = React.createContext({
    data : [
        {
            id : 1,
            name : "Prakhar",
            age : 24,
            city : "Kanpur",
            hobby : "Sleeping"
        }
    ],
    addDetail : (enteredData) => {},
    deleteDetail : (id) =>{},
    updateCrud : (id, name, age, city, hobby) => {}
})

const CrudContextProvider = CrudContext.Provider

const useCrud = () => {
    return useContext(CrudContext)
}

export {CrudContext, CrudContextProvider, useCrud}