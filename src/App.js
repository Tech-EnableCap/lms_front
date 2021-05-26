import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [selectFile, setFile] = useState();

  const handleDis = (e) => {
    let ip = document.getElementById("fileUpload");
    ip.click();
  }
  
  const disOnChage = (e) => {
    let file = e.target.files[0];
    if(file === undefined)
      return;
    let fl = file.name.split(".");
    let ext = fl[fl.length - 1]
    if(ext !== "xlsx" && ext !== "xls") {
      alert("Invalid file format " + ext);
      return;
    }
    console.log(file);
    let frmData = new FormData();
    frmData.append(
      "disbursement", file, file.name
    );
    axios.post("http://localhost:5000", frmData).then(() => {
      alert("Successfully Uploaded.");
    }).catch(e => {
      console.log(e);
      alert("Error occurred.")
    })
  }
  
  return (
    <div className="App">
      <Sidebar
       handleDis={handleDis}
       upDisOnChange={disOnChage}
       />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
