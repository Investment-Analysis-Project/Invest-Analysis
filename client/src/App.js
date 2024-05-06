import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Search from "./components/search/Search";
import { ProjectsContextProvider } from './contextapi.js/projectscontext';
import Analysis from "./pages/analysis/Analysis";
import Profile from "./pages/profile/Profile";
import Result from "./pages/result/Result";
import Protectedroute from "./components/protectedroute/Protectedroute"

function App() {

  return (
    <ProjectsContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/search_key" element={<Search/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/result" element={<Protectedroute/>}/>
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;