import { useState } from 'react';
import './App.css'
import { Button } from './components/button/Button'
import { Layout } from './components/layout/Layout'
import { useAppContext } from './contexts/appContext'

function App() {
  const {state, setState} = useAppContext();

  return (
    <Layout>
      <h1 title="Tooltip">State count is: {state.count}</h1>
      <Button onClick={() => setState(({count}) => ({count: count + 1}))}>Test</Button>
    </Layout>
  )
}

export default App
