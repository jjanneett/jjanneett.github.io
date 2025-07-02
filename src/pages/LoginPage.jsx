import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";

export default function LoginPage({ onLogin }) {
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (id, password) => {
        if (!id.trim() || !password.trim()) {
            alert("아이디와 패스워드를 입력하세요.");
            return;
        }
        onLogin();
        setShowModal(false);
        navigate("/");
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", background: "#f0f2f5" }}
        >
            <LoginModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleLogin={handleLogin}
            />
            {!showModal && (
                <div className="text-center">
                    <h2>로그인이 완료되었습니다.</h2>
                </div>
            )}
        </div>
    );
}
