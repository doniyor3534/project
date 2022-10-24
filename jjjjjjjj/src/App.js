import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import { Chat } from "./component/Chat";
import { Login } from "./component/Login";

function App() {
  const user = false;
  return (
    <div className="App">
      <Navbar />
      {user ? (
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
