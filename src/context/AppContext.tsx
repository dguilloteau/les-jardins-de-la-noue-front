import React, { createContext, ReactNode, useReducer } from "react";
import { FormActions } from "../actions";
import FormState from "../models/DtoStructures";
import { reducer } from "../reducer";
import { initializeState } from "./initializeState";


// Define the type for your context data
type AppContextType = {
    state: FormState;
    dispatch: React.Dispatch<FormActions>;
};

// Create the context with an initial value of null
export const AppContext = createContext<AppContextType | null>(null);

// Define the props type for the context provider component
type ContextProviderProps = {
    children: ReactNode;
};

// Define the provider component
const AppContextProvider = ({ children }: Readonly<ContextProviderProps>) => {
    const [state, dispatch] = useReducer(reducer, initializeState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;