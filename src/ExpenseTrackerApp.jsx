import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import  ContextProvider  from './AppContext/AppContext'
import './ExpenseTracker.css'


function ExpenseTracker(){
  
  return (
    <>
      <ContextProvider>
        <Header />
        <Main />
        <Footer />
      </ContextProvider>
    </>
  )
}

export default ExpenseTracker