import {createContext, useContext, useState} from 'react'
import type {ReactNode}from 'react'
export type Theme='light'|'dark';
const ThemeContext = createContext<{theme:Theme,onChangeTheme?:()=>void}|null>({theme:'light'});


const ThemeProvider=({children}:{children:ReactNode})=>{
    const [theme,setTheme]=useState<Theme>('light');

    const onChangeTheme=()=>setTheme((prevTheme)=>prevTheme=='light'?'dark':'light')
    return (
        <ThemeContext.Provider value={{theme,onChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>{
    const context = useContext(ThemeContext);
    if(!context) throw new Error("Context can not be undefined");
    return context;
}

export default ThemeProvider;