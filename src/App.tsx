import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import CardDetails from "./components/cards-details";

const App = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
            <Route path="cards/:slug" element={<CardDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
