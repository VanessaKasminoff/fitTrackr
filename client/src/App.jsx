import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";
import NewUser from "./pages/NewUser";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    // put anything before the <BrowserRouter> and it will appear in all webpages! so like nav bar or logo is what im thinking of, make sure you wrap everuthing into a div if you are going to! this includes <BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <>
  //     <h1>Hi! Welcome to fitTrackr!</h1>
  //   </>
  // );
}

export default App;
