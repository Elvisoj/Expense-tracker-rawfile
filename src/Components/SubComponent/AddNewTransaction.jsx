import { useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'

function AddNewTransaction(){
  const {transactions, setTransactions, amountField, typeField, nameField} = useContext(AppContext)
  const {name, setName} = nameField;
  const {type, setType} = typeField;
  const {amount, setAmount} = amountField;
  
  const handSubmit =(e)=>{
    e.preventDefault();
    const sign = type === "expense" ? '-' : '+';
    if(name && type && amount){
      const newTransaction = {
        name,
        type,
        amount: sign + amount,
        id: Math.random()
      }
      setTransactions(t => [...t, newTransaction])
      setName('')
      setType('income')
      setAmount('')
    }
  }
  
  return (
    <div className="AddNewTransaction">
      <h2 className="title">Add New Transaction</h2>
      <form onSubmit={handSubmit}>
        <label htmlFor="select" >
          Transaction Type  
          <select id="select" onChange={(e)=> setType(e.target.value)} value={type}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label htmlFor="t-name" >
          Transaction Name  
          <input type="text" id="t-name" onChange={(e)=> setName(e.target.value)} value={name}/>
        </label>
        <label htmlFor="t-amount" >
          Transaction Amount  
          <input type="tel" id="t-amount" onChange={(e)=> setAmount(e.target.value)}
          value={amount}/>
        </label>
        <button type="submit" >Add Transaction</button>
      </form>
    </div>
  )
}
export default AddNewTransaction