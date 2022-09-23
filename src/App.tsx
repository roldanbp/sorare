import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import CardContainer from "./containers/card-container";

const App = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
            <Route path="cards/:slug" element={<CardContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
