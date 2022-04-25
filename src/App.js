import logo from './logo.svg';
import './App.css';
import List from './pages/todos/List';
import Add from "./pages/todos/Add";
import Edit from "./pages/todos/Edit";
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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
