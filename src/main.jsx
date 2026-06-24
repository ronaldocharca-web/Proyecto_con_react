import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContadorApp from './ContadorApp'
import ListadoApp from './ListadoApp'
import UserApp from './UserApp'
import HooksApp from './HooksApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/*
  <ContadorApp value={100} />
  <ListadoApp />
   <UserApp />
  */}
  <HooksApp />
</StrictMode>,
)
