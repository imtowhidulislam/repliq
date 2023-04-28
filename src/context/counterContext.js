import React, { createContext , useState} from 'react'
export const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {
    const [itemCounter, setItemCounter] = useState(1);

    const decrementItem = () => {
        setItemCounter(prevCount => prevCount - 1);
        if(!itemCounter > 0) setItemCounter(0);
    } 
     const incrementItem = () => {
        setItemCounter(prevCount => prevCount + 1);
    } 


    return (
    <CounterContext.Provider value={{decrementItem, incrementItem, countState:[itemCounter,setItemCounter]}}>
        {children}
    </CounterContext.Provider>
  )
}
