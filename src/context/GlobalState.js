import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// INITIAL STATE

const initialState = {
    users: []
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

    const addUser = (name) => {
        dispatch({
            type: 'ADD_USER',
            payload: name
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}