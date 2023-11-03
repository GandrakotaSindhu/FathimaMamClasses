//import logo from './logo.svg';
import "./App.css";
import { NameList } from "./components/NameList";
//import { NameList } from "./components/NameList";
//import { People } from "./components/People";
//import ClickHandler from './components/ClickHandler';
//import { UserGreetings } from './components/UserGreetings';
//import Greet from './components/Greet';
// import {Hello} from './components/Hello'
//import {Message} from './components/Message'

function App() {
  return (
    // <div>
    // <Greet name="Sindhu" company="CGG">
    //   <p>Lorem ipsum dolor sit amet.</p>
    //   {/* This is special children prop */}
    //   </Greet>
    // <Greet name="Sri" company="Genpact">
    //   <button>Testing</button>
    //   </Greet>
    // <Greet name="Sukanya" company="Home"/>
    // </div>
    // <div>
    //   <Hello/>
    // </div>
    // <Message/>
    // <ClickHandler></ClickHandler>
    // <UserGreetings></UserGreetings>
    // <NameList></NameList>
    <NameList />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
