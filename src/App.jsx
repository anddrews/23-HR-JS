import './App.css'

function App() {
  const arr = ['apple', 'banana', 'orange']
  
  return (
    <>
      <h1>HW1</h1>
      {arr.map((item, index) => (<div key={index}>{item}</div>))}
    </>

  )
}

export default App
