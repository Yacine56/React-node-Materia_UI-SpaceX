import React ,{useState,createContext} from "react"




export const context = createContext()


export const ContextProvider=(props)=>{
   
const [loading,setLoading]=useState(false)

return (
    <context.Provider value={[loading,setLoading]}>
        {props.children}
    </context.Provider>
)

}