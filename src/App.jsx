import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route>
          <Route path="*" element={<Main />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
