import './styles/App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {router} from "./routes/router";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
            <Routes>
                {router.map(route =>
                    <Route key={route.path} path={route.path} Component={route.component} exact/>
                )}
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
