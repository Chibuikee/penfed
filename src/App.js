import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Footer from "./components/Footer";
// import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="Details/:productId" element={<DetailsPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
