import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {

  const [mode,setMode]=useState('light');
  const [alert,setalert]=useState(null);
  const showAlert=(messege,type)=>{
    setalert({
      msg: messege,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(36, 39, 68)';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
      <>
        {/* <Navbar title="TestUtils" AboutText="AboutTextUtils"/> */}
        {/* <Navbar/> */}

        <Navbar title="TestUtils"mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the text to analyse below"mode={mode}/>
          {/* <About/> */}
        </div>
        
      </>
  );
}
export default App;
