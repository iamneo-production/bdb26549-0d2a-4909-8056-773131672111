
import './App.css';
import Headers from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import InsertData from './InsertData';
import ViewAllData from './ViewAllData';
import Update from './Update';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
         <Route path="/insertdata" element={<InsertData/>} />
         <Route path="/viewalldata" element={<ViewAllData/>} /> 
         <Route path="/updatescore" element={<Update/>} />
      </Routes>
      </Router>
  );
}

export default App;
