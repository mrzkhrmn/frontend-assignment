import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RestaurantDetail } from "./pages/RestaurantDetail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileHeader } from "./components/MobileHeader";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileHeader />
    </div>
  );
}

export default App;
