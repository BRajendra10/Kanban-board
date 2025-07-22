import { createContext, useState } from "react";

export const FormContext = createContext(false);

export function FormContextProvider({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <FormContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </FormContext.Provider>
  );
}
