import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { ProjectsContextProvider } from './contextapi.js/projectscontext';
import Analysis from "./pages/analysis/Analysis";

function App() {
  return (
    <ProjectsContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;