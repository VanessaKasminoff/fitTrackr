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

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/MealPrep" element={<MealPrep />} />
        <Route path="/LearnMore" element={<LearnMore />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
