import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ productData, setProductData ] = useState([]);
  const [ error, setError ] = useState(null);

  return (
    <>
      <AppContext.Provider value={{ productData, setProductData, error, setError }}>
        {children}
      </AppContext.Provider>
    </>
  )
}