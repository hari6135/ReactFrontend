import "./styles.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar /> 
          <AnimatedRoutes />
        <ToastContainer />
        </Router>
      </div>
  );
}

export default App;
