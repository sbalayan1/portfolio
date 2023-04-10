import React, {useState} from 'react';
// import myImage from './Assets/1547704960267'
// import pleaseWork from './Assets/logo512.png'
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5 } from 'react-icons/si'
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [dark, setDark] = useState(false)

  const skills = [<SiJavascript className="text-yellow-500 bg-black"/>, <SiTypescript className="text-blue-700 bg-black"/>, <SiReact className="bg-black text-blue-500"/>, <SiRubyonrails className='bg-red-500'/>, <SiPython className="bg-blue-500"/>, <SiPostgresql className="bg-blue-300"/>, <SiHtml5 className="bg-orange-400" /> ]
  
  const skillsToDisplay = skills.map((skill, idx) => ({id: idx+1, component: skill}))

  const handleDark = () => {
    setDark(dark => !dark)
  }
  return (
    <div className={`flex flex-col justify-between items-center text-4xl min-h-screen ${dark ? "bg-blue-950 text-black" : "bg-white text-blue-800"}`}>
      <NavBar dark={dark} handleDark={handleDark}/>
      <Home dark={dark} handleDark={handleDark}/>
      {/* <div className='flex justify-evenly w-full'>{skillsToDisplay.map((obj) => obj.component)}</div> */}
    </div>
  );
}

export default App;
