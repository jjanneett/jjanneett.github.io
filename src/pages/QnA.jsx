import { useState } from "react";
import { Accordion, Button } from 'react-bootstrap';

function QnA({ isLoggedIn }) {
    const [questions, setQuestions] = useState([
        {
            title: "연구실 지원 요건이 궁금합니다.",
            content: "학부 3학년 이상이어야 하고, 기본 프로그래밍 역량이 필요합니다.",
            answer: "학부 3학년 이상, 기본 프로그래밍 역량 필요."
        }
    ]);
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const [validated, setValidated] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titleInput || !contentInput) {
            setValidated(true);
            return;
        }
        setQuestions([{ title: titleInput, content: contentInput, answer: null }, ...questions]);
        setTitleInput("");
        setContentInput("");
        setValidated(false);
    };

    const handleAdminAnswer = (idx) => {
        if (!isLoggedIn) {
            alert("로그인이 필요합니다.");
            return;
        }
        const answer = window.prompt("답변을 입력하세요:");
        if (answer && answer.trim().length > 0) {
            setQuestions(prev =>
                prev.map((item, i) => (i === idx ? { ...item, answer } : item))
            );
        }
    };

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">Q&amp;A</h2>
            {isLoggedIn ? (
                <form className="card p-4 shadow mb-5 bg-light border-0" onSubmit={handleSubmit}>
                    <h5 className="mb-3">질문 작성하기</h5>
                    <div className="mb-3">
                        <input
                            type="text"
                            className={`form-control ${validated && !titleInput ? "is-invalid" : ""}`}
                            placeholder="제목을 입력하세요"
                            value={titleInput}
                            onChange={e => setTitleInput(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
            <textarea
                className={`form-control ${validated && !contentInput ? "is-invalid" : ""}`}
                placeholder="내용을 입력하세요"
                rows={3}
                value={contentInput}
                onChange={e => setContentInput(e.target.value)}
            />
                    </div>
                    <button type="submit" className="btn btn-primary">등록</button>
                </form>
            ) : (
                <div className="alert alert-warning">
                    질문을 작성하려면 로그인해야 합니다.
                </div>
            )}
            <Accordion activeKey={activeKey} onSelect={setActiveKey}>
                {questions.map((item, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                            <div><strong>질문:</strong> {item.content}</div>
                            <div className="mt-2"><strong>답변:</strong> {item.answer ?? "아직 답변이 없습니다."}</div>
                            {isLoggedIn && (
                                <div className="mt-3">
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleAdminAnswer(idx)}>
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
