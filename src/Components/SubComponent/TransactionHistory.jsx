import { useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'


function TransactionHistory(){
  
  const {transactions, setTransactions} = useContext(AppContext)
  const handleDelete = (id)=>{
    const newTrans = transactions.filter((transaction)=> transaction.id !== id);
    setTransactions(newTrans)
  }
  
  return (
    <div className="TransactionHistory">
      <h2 className="title">Transaction History</h2>
      <ul>
        {
        transactions?.length > 0 ? (
          transactions.map((t)=> 
          <li key={t.id} className={t.type === "expense" ? "minus" : "plus"}>
            <span key={t.id} onClick={() => handleDelete(t.id)} className="delete"></span>
            <span>{t.name}</span>
            <span>{t.type}</span>
            <span>{t.amount}</span>
          </li>)
        ) : (
          <li>No transaction record...</li>
        )
        }
      </ul>
    </div>
  )
}
export default TransactionHistory