import TransactionSummary from './SubComponent/TransactionSummary.jsx'
import TransactionHistory from './SubComponent/TransactionHistory'
import AddNewTransaction from './SubComponent/AddNewTransaction'

function Main(){
  
  return (
    <main className="main">
      <TransactionSummary />
      <TransactionHistory />
      <AddNewTransaction />
    </main>
  )
}

export default Main