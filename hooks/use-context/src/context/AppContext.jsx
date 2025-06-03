import { createContext } from "react";


export const AppContext = createContext();

const ContextProvider = (props)=>{
    const phone ="545441481"
    const name ="Harsh"
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;
