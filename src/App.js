import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./layout/Home";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

export default function App () {


return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home>
      
    </Home>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Register" element={<Register/>}/>
  </Routes>
  </BrowserRouter>
);

}