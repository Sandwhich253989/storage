import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home.js";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Home></Home>
      <TopBar></TopBar>
    </div>
  );
}

export default App;
