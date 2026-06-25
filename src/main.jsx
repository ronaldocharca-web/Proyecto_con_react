import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContadorApp from './ContadorApp'
import ListadoApp from './ListadoApp'
import UserApp from './UserApp'
import HooksApp from './HooksApp'
import App from './App'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <StrictMode>
  {/*
  <ContadorApp value={100} />
  <ListadoApp />
   <UserApp />
   
  <HooksApp />
  */}
  <App></App>
</StrictMode>
</BrowserRouter>,
)
