import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.scss';
import CardContainer from "./containers/card-container";
import Provider from "./store/provider"
import Button from "./components/button/button";
const namespace = "main";

const App = () => {
  return (
    <Provider>
      <div className={namespace}>
          <Button />
          <Router>
            <Routes>
                <Route path="cards/:slug" element={<CardContainer />} />
            </Routes>
          </Router>
      </div>
    </Provider>
  );
}

export default App;
