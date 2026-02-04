import { StrictMode } from 'react' // Help developers catch mistakes early
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> //“Render the App component”
  </StrictMode>,
)
