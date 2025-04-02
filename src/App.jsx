import './App.css'
const arr = ['apple', 'banana', 'orange']

function App() {
  
  return (
    <>
      <h1>HW1</h1>
      {arr.map((item, index) => (<div key={index}>{item}</div>))}
    </>

  )
}

export default App
