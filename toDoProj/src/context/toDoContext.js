import React from 'react'

const toDoContext = React.createContext()

const toDoContextProvider = toDoContext.Provider
const toDoContextConsumer = toDoContext.Consumer

export {toDoContextProvider, toDoContextConsumer}