import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";
import NewUser from "./pages/NewUser";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
  return (
    <>
      <h1>Hi! Welcome to fitTrackr!</h1>
    </>
  );
}

export default App;
