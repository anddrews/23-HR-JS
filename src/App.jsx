import './App.css'

function App() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Hello world</h1>
      {arr.map((item, index) => (<div key={index}>{item}</div>))}
    </>
  )
}

export default App
