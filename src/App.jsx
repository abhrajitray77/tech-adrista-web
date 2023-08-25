import Navbar from "./components/Navbar";
import './App.css'
import Cluster from "./components/Cluster";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
    
  );
}

export default App;
