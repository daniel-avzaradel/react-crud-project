import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// INITIAL STATE

const initialState = {
    users: [
        {id: 1, name: 'User One'},
        {id: 2, name: 'User Two'},
        {id: 3, name: 'User Three'},
    ]
};

// CREATE CONTEXT

export const GlobalContext = createContext(initialState)

// Provider Content

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // ACTIONS
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}