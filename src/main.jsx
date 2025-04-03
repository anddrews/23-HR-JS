import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { mockArr } from './__mocks__/mockArr.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App arr={mockArr}/>
  </StrictMode>,
)
