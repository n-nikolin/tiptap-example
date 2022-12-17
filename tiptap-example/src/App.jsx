import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tiptap from "./components/TipTap/Tiptap.jsx";
import {Posts} from './components/Posts'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/new_post" element={<Tiptap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
