import {useState,createContext} from 'react';

export const PositionContext = createContext({
   positionKey:0,
   setPositionKey:()=>{}
});

export const PositionProvider = ({children})=>{
    const [positionKey,setPositionKey] = useState(0);
    const value = {
        positionKey,
        setPositionKey
    }
    return <PositionContext.Provider value={value}>{children}</PositionContext.Provider>
} 

