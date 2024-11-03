import "./App.css"; //기본 제공
import {Routes, Route} from "react-router-dom"; // Routes와 Route import
//페이지 import
import Group from './pages/Group.jsx'
import NavigationBar from "./components/NavigationBar.jsx";

function App() {
  return (
      <>
        <div className="app-container">
          <Routes>
            <Route path="/group" element={<Group/>} />
          </Routes>
        </div>
          <NavigationBar/>
      </>
  );
}

export default App;
