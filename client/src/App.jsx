import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";
import NewUser from "./pages/NewUser";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import MealPrep from "./pages/MealPrep";
import LearnMore from "./pages/LearnMore";
import Fitness from "./pages/Fitness";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <h1>Hi! Welcome to fitTrackr!</h1>
    </>
  )
}

export default App;
