import logo from './logo.svg';
import './App.css';
import List from './pages/todos/List';
import Add from "./pages/todos/Add";
import Edit from "./pages/todos/Edit";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import {
    Route,
    Routes,
    Link, BrowserRouter
} from "react-router-dom";
import GalleryImage from "./pages/GalleryImage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Link to="/add">Add</Link>
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/edit" element={<Edit/>}/>
                    <Route path="/gallery" element={<GalleryImage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
