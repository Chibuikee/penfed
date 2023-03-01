import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="Details/:productId" element={<DetailsPage />} /> */}
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
