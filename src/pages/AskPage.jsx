import AskForm from "../components/AskForm.jsx";
import { useNavigate } from "react-router-dom";

export default function AskPage({ setQuestions }) {
    const navigate = useNavigate();

    const handleSubmit = (newQuestion) => {
        setQuestions(prev => [newQuestion, ...prev]);
        navigate("/qna");
    };

    return (
        <div>
            <AskForm onSubmit={handleSubmit} onClose={() => navigate(-1)} />
        </div>
    );
}
