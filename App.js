import logo from './logo.svg';
import './App.css';
import {Header} from './mycomponents/Header';
import {AddTitle} from './mycomponents/AddTitle';
import {Footer} from './mycomponents/Footer';
import { useState,useEffect } from 'react';


function App() {
  const header = (title,regno)=>{
    console.log("I am adding this title and regno", title,regno);
    
    const mytitle = {
      title: title,
      welcome: "Welcome to my college",
      hey: "Hey!",
      no: "Your regno. is",
      regno: regno,
    }
    setFooter([...footer, mytitle]);
    console.log(mytitle);
  }
  const [footer,setFooter] = useState([]);
  return (
    <div className="App">
      <Header header={header}/>
      <AddTitle footer={footer}/>
      <Footer footer={footer}/>
       <p>assignment done by suraj 12012825</p>
    </div>
  );
}

export default App;
