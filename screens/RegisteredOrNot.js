import { createContext, useContext } from "react";

let registeredGlobal = false;

export const RegisteredContext = createContext({
    globalRegistered: registeredGlobal,
    isGlobalRegistered: (newState) => {
        registeredGlobal = newState;
        console.log("NewState: " + newState);
        console.log("globalRegistered in RegisteredContext: " + registeredGlobal);
    }
})

// custom hook
export const isRegistered = () => useContext(RegisteredContext);