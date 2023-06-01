import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/dashboard/dashboard";
import UpdateProfile from "./componant/UpdateProfile";
import ResetPassword from "./componant/ResetPassword";



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
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
