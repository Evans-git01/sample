import Home from "./layout/Home";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import PrivateRoute from "./pages/Context/PrivateRoute";
export default function App () {


return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home>
      
    </Home>}/>
    <Route> element={<PrivateRoute/>}
    
    </Route>

    <Route path="/signup" element={<SignUp/>}/> 
    
  </Routes>
  </BrowserRouter>
);

}