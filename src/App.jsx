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
import AskPage from "./pages/AskPage";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [questions, setQuestions] = useState([
        {
            id: "qna-base-1",
            title: "연구실 지원 요건이 궁금합니다.",
            content: "학부 3학년 이상이어야 하고, 기본 프로그래밍 역량이 필요합니다.",
            answer: "학부 3학년 이상, 기본 프로그래밍 역량 필요.",
            createdAt: new Date().toLocaleString(),
            phone: "010-1234-5678",
        },
    ]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    function handleLogin(token) {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    }

    function handleLogout() {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    }

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
                    <Route path="/qna" element={<QnA isLoggedIn={isLoggedIn} questions={questions} setQuestions={setQuestions} />} />
                    <Route path="/ask" element={<AskPage setQuestions={setQuestions} />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}