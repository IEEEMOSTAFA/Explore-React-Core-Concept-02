
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';











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

      <Friends></Friends>

      <Users></Users>



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
