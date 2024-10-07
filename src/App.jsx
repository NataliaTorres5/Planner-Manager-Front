import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/HomePage";
import ProyectsPage from "./pages/ProyectsPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/LogInPage";
import WebsiteLayout from "./layouts/WebsiteLayout";
import OneProyectPage from "./pages/OneProyectPage";
import ProfilePage from "./pages/ProfilePage";
import FakeProyectPage from "./pages/FakeProyectPage";
import AuthGuard from "./guardian/AuthGuard";
import RoutesWithoutUser from "./guardian/RoutesWithoutUser";
import authQueries from "./services/autheQueries";
import userActions from "./store/actions/userActions";

function App() {
 
const dispatch = useDispatch();

const token = localStorage.getItem("token");

  useEffect(() => {
    
    if (token) {
      authQueries.signInUserWithToken(token).then((res) => {
        console.log(res)
        if (res.token) {
          dispatch(userActions.login(res));
        }
      });
    }
  }, [token, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/proyects" element={<ProyectsPage />} />
            <Route path="/proyects/:id" element={<OneProyectPage />} />
            <Route path="/fproyects" element={<FakeProyectPage/>}/>

            {
              /*
              <Route path="/auth" element= {<RoutesWithoutUser/>}>
            </Route>
            */}

            
            

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<SignInPage />} />

            <Route path="/private" element={<AuthGuard />}>
              <Route path="/private/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<h2> 404 </h2>}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
