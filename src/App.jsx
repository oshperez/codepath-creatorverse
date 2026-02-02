import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import CreatorDetails from "./pages/CreatorDetails";
import CreatorForm from "./pages/CreatorForm";
import "./App.css";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <main>
      <Navigation />
      <div className="hero"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/creator/:id" element={<CreatorDetails />} />
        <Route path="/new" element={<CreatorForm />} />
        <Route path="/edit/:id" element={<CreatorForm />} />
      </Routes>
    </main>
  );
}
