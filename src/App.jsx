import {useState} from 'react';
import { Input } from './components/input/Input'
import './App.css'
import { Text } from './components/text/Text'
import { Component } from './components/render-props/Component';
import { Table } from './components/table/Table';
import { data } from './__mocks__/table';

const Cell = ({item}) => (
  <div className="cell">
    <h2>{item.name}</h2>
    <p>{item.value}</p>
  </div>
)
 const Cell1 = ({item}) => (<p>{item.name} {item.value}</p>)
function App() {
  const [state, setState] = useState("Hello world!");
  
  return (
      <div className="container">
        <Component text="Test">

        <Text text="Hello world!" />
        </Component>
        <Table data={data} cellComponent={Cell} />
      </div>
  )
}

export default App
