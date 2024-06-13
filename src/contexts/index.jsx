import { createContext, useContext, useState } from "react";

export const initialState = {
    personSelected: '',
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
const [state, setState] = useState(initialState);

return (
    <Context.Provider value={[state, setState]}>
        {children}
    </Context.Provider>
);
};

export const useCounterContext = () => {
const context = useContext(Context);
if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext inside <>');
}

return [...context];
};
  