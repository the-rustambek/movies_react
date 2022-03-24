 
import { createRef } from 'react';
import './App.css';


function App() {
  const cardRef = createRef();
  const firstNameRef = createRef();

  const handleClick = (e) =>{
      e.preventDefault();
      if(cardRef.current.value.length < 16){
        alert("invalid card number");
        return;
      }
  }
  return (
    <div className="App">
      <form  onSubmit={handleClick}>
        <input type="text" name='card' placeholder='visa card' ref={cardRef} />
        <input type="text" name='name' ref={firstNameRef} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
