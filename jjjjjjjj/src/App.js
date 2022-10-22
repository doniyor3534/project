import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./component/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
