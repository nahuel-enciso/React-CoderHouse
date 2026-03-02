import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' //esto es la importacion del export default
import {Saludo} from './App.jsx' //q
// esto es la importacion de saludo via destructuring

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
