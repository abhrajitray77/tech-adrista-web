import Navbar from "./components/Navbar";
import './App.css'
import Cluster from "./components/Cluster";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Cluster />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;
