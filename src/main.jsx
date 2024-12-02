import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import ExpenseTrackerApp from './ExpenseTrackerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseTrackerApp />
  </StrictMode>
)
