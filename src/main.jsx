import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormContextProvider } from './context/FormContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FormContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FormContextProvider>,
)
