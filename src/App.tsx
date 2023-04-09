import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5 } from 'react-icons/si'
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [dark, setDark] = useState(false) 
  const skills = [<SiJavascript className="text-yellow-500 bg-black"/>, <SiTypescript className="text-blue-700 bg-black"/>, <SiReact className="bg-black text-blue-500"/>, <SiRubyonrails className='bg-red-500'/>, <SiPython className="bg-blue-500"/>, <SiPostgresql className="bg-blue-300"/>, <SiHtml5 className="bg-orange-400" /> ]

  const handleDark = () => {
    setDark(dark => !dark)
  }
  return (
    <div className={`text-4xl min-h-screen ${dark ? "bg-blue-950 text-black" : "bg-white text-white"}`}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar dark={dark} handleDark={handleDark}/>
      Hey is this working?
      <div className='flex'>{skills.map(skill => skill)}</div>
    </div>
  );
}

export default App;
