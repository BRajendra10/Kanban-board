import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormContext } from './context/FormContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FormContext>
    <App />
  </FormContext>,
)
