import React, {useState} from 'react';
// import myImage from './Assets/1547704960267'
// import pleaseWork from './Assets/logo512.png'
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Links from './Components/Links'
import About from './Components/About'
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [dark, setDark] = useState(false)
  const handleDark = () => {
    setDark(dark => !dark)
  }
  return (
    <div 
      className={`
        min-h-screen flex flex-col justify-between items-center text-4xl 
        ${dark ? "bg-blue-950 text-black" : "bg-white text-blue-800"}
      `}>
      <NavBar dark={dark} handleDark={handleDark}/>
      <Home dark={dark} handleDark={handleDark}/>
      <About dark={dark}/>
      <Links />
    </div>
  );
}

export default App;
