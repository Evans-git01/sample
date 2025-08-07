import Home from "./layout/Home";
import { BrowserRouter ,Routes ,Route ,Outlet ,Navigate } from "react-router-dom";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { getAuth } from "firebase/auth";



const PrivateRoutes = () => {
  const auth = getAuth();
  // If no user, redirect to /siup; else render <Outlet />
  return auth.currentUser ? <Outlet /> : <Navigate to="/signup" replace />;
};
export default function App () {


return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home>
      
    </Home>}/>
    <Route path="/Signup" element={<SignUp/>}/>
    
    {/* Protected wrapper */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* add more protected routes here */}
        </Route>

    <Route path="/signup" element={<Navigate to="/signup" />}/> 
  </Routes>
  </BrowserRouter>
);

}