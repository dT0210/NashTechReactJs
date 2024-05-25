import './App.css';
import Checkboxes from './components/Checkboxes';
import Counter from './components/Counter';
import Profile from './components/Profile';
import {useState} from "react";
import Pokemon from './components/Pokemon';
import RegisterForm from './components/RegisterForm';

function App() {
  const arrayProfile = [
    {
      style: {backgroundColor: "red"},
      profile: {
        name: "Hoangdd",
        age: 34
      }
    },
    {
      style: {backgroundColor: "yellow"},
      profile: {
        name: "Son Tung MTP",
        age: 25
      }
    },
    {
      style: {backgroundColor: "green"},
      profile: {
        name: "Hello Ronaldo",
        age: 37
      }
    }
  ];

  const [option, setOption] = useState('welcome');
  const handleOptionChange = (event) => {
    setOption(event.target.value);
  }
  return (
    <div className="App">
      <select name="option" id="option" value={option} onChange={handleOptionChange}>
        <option value="welcome">Welcome</option>
        <option value="counter">Counter</option>
        <option value="checkboxes">Checkboxes</option>
        <option value="pokemon">Pokemon</option>
        <option value="form">Register form</option>
      </select>
      <p>Option selected: {option}</p>
      {(option === "welcome") && (
        <div className='profile'>
          {arrayProfile.map((item) => (
            <Profile profile={item.profile} style={item.style}/>
          ))}
        </div>
      )}
      {(option === "counter") && (
        <Counter/>
      )}
      {(option === "checkboxes") && (
        <Checkboxes/>
      )}
      {(option === "pokemon") && (
        <Pokemon/>
      )}
      {(option === "form") && (
        <RegisterForm />
      )}
    </div>
  );
}

export default App;
