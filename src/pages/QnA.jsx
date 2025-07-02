import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function QnA({ isLoggedIn, questions, setQuestions }) {
    const [activeKey, setActiveKey] = useState(null);
    const navigate = useNavigate();

    const handleAdminAnswer = (id) => {
        if (!isLoggedIn) {
            alert("관리자 답변은 로그인해야 합니다.");
            return;
        }
        const answer = window.prompt("답변을 입력하세요:");
        if (answer && answer.trim().length > 0) {
            setQuestions(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, answer } : item
                )
            );
        }
    };

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">Q&amp;A</h2>
            <div className="mb-4 text-end">
                <Button
                    variant="primary"
                    onClick={() => navigate("/ask")}
                >
                    질문 등록하기
                </Button>
            </div>
            <Accordion activeKey={activeKey} onSelect={setActiveKey}>
                {questions.map((item) => (
                    <Accordion.Item eventKey={String(item.id)} key={item.id}>
                        <Accordion.Header>
                            <div className="qa-title-wrap" style={{ width: "100%" }}>
                                <span>{item.title}</span>
                                <span className="qa-date-inline">{item.createdAt}</span>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div><strong>질문:</strong> {item.content}</div>
                            <div className="mt-2">
                                <strong>답변:</strong> {item.answer ?? "아직 답변이 없습니다."}
                            </div>
                            {isLoggedIn && (
                                <div className="mt-3">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => handleAdminAnswer(item.id)}
                                    >
                                        관리자 답변 등록
                                    </Button>
                                </div>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default QnA;
