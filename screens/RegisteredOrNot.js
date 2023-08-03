import { createContext, useContext, useEffect, useState } from "react";

export const RegisteredContext = createContext({
  globalRegistered: false,
  isTrueRegistered: () => {},
});

export const RegisteredProvider = (props) => {
  const [isGlobalRegistered, setIsGlobalRegistered] = useState(false);
  useEffect(() => {
    setIsGlobalRegistered(isGlobalRegistered);
  }, [isGlobalRegistered]);
  const defaultRegistered = {
    globalRegistered: isGlobalRegistered,
    isTrueRegistered: () => {
        setIsGlobalRegistered(true)
        console.log("isglobalregistrered in registeredprovider3: " + isGlobalRegistered)
    },
  };

  return (
    <RegisteredContext.Provider value={defaultRegistered}>
      {props.children}
    </RegisteredContext.Provider>
  );
};

// custom hook
export const isRegistered = () => useContext(RegisteredContext);
