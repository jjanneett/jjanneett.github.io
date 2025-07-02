import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutLab from "./pages/AboutLab";
import Professor from "./pages/Professor";
import Researchers from "./pages/Researchers";
import Papers from "./pages/Papers";
import Notices from "./pages/Notices";
import QnA from "./pages/QnA";
import LoginPage from "./pages/LoginPage";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogin = () => {
        localStorage.setItem("token", "fake-token");
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <div className="d-flex flex-column min-vh-100 w-100" style={{ background: '#f7fafd' }}>
            <CustomNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <main className="flex-grow-1 w-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutLab />} />
                    <Route path="/professor" element={<Professor />} />
                    <Route path="/researchers" element={<Researchers />} />
                    <Route path="/papers" element={<Papers />} />
                    <Route path="/notices" element={<Notices />} />
                    <Route path="/qna" element={<QnA isLoggedIn={isLoggedIn} />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}