
import './App.css'
import Counter from './Counter';
import Team from './Team';












function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked');
  }
 const addToFive = (num) =>{
  alert(num + 5);
 }
  return (
    <>
      
      <h3>React Core Concepts</h3>
      <Team></Team>






      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('Third Clicked')}} >Click3</button>
      {/* Critical */}
      <button onClick={() => addToFive(10)}>Four</button>
      
     
    </>
  )
}

export default App
