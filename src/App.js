import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/dashboard/dashboard";
import UpdateProfile from "./componant/UpdateProfile";
import ResetPassword from "./componant/ResetPassword";
import Detail from "./componant/Detail";



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path="/updateprofile" element={<UpdateProfile/>}/>
    <Route exact path="/resetpassword" element={<ResetPassword/>}/>
    <Route exact path="/detail" element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
