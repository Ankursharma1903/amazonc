import React, {createContext, useContext, useReducer } from 'react';


// Prepares the datalayer
export const StateContext = createContext();

// wrap our app and provide the data layer to all the components inside our app 

export const StateProvider = ({ reducer,initialState, children })=> (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
                {children}
            </StateContext.Provider>
    );

    //Pull the information from the data layer
    export const useStateValue =()=> useContext(StateContext);

// emplained by me in readme line 244



