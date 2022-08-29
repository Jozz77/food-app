import './App.css';
import Landing from './Home-com/landing';
import { BrowserRouter, Routes, Route} from "react-router-dom"

import AppRouter from './appRouter';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
  
// // import Home component
// import Home from "./components/Home";
// // import About component
// import About from "./components/About";
// // import ContactUs component
// import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppRouter />
      <Landing /> 

    </div>
    </BrowserRouter>
  );
}

export default App;
