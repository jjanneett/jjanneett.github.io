import CustomNavbar from "./components/Navbar";   // Navbar.jsx 파일이 CustomNavbar 함수로 되어있어야 함!
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutLab from "./pages/AboutLab";
import Professor from "./pages/Professor";
import Researchers from "./pages/Researchers";
import Papers from "./pages/Papers";
import Notices from "./pages/Notices";
import QnA from "./pages/QnA";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100 w-100" style={{ background: '#f7fafd' }}>
            <CustomNavbar />
            <main className="flex-grow-1 w-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutLab />} />
                    <Route path="/professor" element={<Professor />} />
                    <Route path="/researchers" element={<Researchers />} />
                    <Route path="/papers" element={<Papers />} />
                    <Route path="/notices" element={<Notices />} />
                    <Route path="/qna" element={<QnA />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
