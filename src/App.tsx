import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {
  const [dark, setDark] = useState(false)
  const handleDark = () => {setDark(dark => !dark)}
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <NavBar dark={dark} handleDark={handleDark}/>
      <Home dark={dark} handleDark={handleDark}/>
      <About dark={dark}/>
      <Portfolio />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
