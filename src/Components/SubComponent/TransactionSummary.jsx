import { useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'


function TransactionSummary(){
  
  function callBack(currentState, item){
    return  Math.abs(item.amount) + Math.abs(currentState)
  }
  const {transactions} = useContext(AppContext)
  const expenseArray = transactions.filter((t)=>t.amount < 0);
  const incomeArray = transactions.filter((t)=>t.amount >= 0);
  const income = incomeArray.reduce(callBack, 0);
  const expense = expenseArray.reduce(callBack, 0);
  const balance = income - expense;
  
  // console.log(expenseArray)
//   console.log(incomeArray)
//   console.log(
//   `Inome ${income}
//   expense ${expense}`)
  
  
  return (
    <div className="TransactionSummary">
      <div className="overview" >
        <div className={balance < 0 ? 'balance minuss' : 'balance'}>
          <h2>Balance</h2>
          <p className={balance < 0 ? 'minuss' : ''}>NGN {balance < 0 ? balance +' Excess Expenses' : balance}</p>
        </div>
        <div className="summary">
          <div className="income">
            <h3>Income</h3>
            <p>NGN {income}</p>
          </div>
          <div className="expense">
            <h3>Expense</h3>
            <p>NGN {expense}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TransactionSummary