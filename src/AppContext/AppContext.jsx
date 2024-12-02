import { createContext, useState } from 'react'
import transArray from './TransArray.js'

export const AppContext = createContext();

function saveData(arrays){
  localStorage.setItem('arrays', JSON.stringify(arrays))
}
const getData = ()=>{
  return JSON.parse(localStorage.getItem('arrays'))
}

function ContextProvider(props){
  
  
  const [transactions, setTransactions]=useState([]);
  const [name, setName] = useState('')
  const [type, setType] = useState('income')
  const [amount, setAmount] = useState('')
  
  const data ={
    transactions,
    setTransactions,
    nameField: {name, setName},
    typeField: {type, setType},
    amountField: {amount, setAmount}
  }
  return (
    <AppContext.Provider value={data}>
      {props.children}
    </AppContext.Provider>
  )
}
export default ContextProvider