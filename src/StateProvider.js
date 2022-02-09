import React,{createContext, useContext, useReducer} from "react"

export const StateContext = createContext();

export const stateProvider = ({reducer,initialState,children}) => (
  <StateContext.Provider value = {usereducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
)

