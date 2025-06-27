import { useState } from "react";
import { Accordion, Button, Card } from 'react-bootstrap';

function QnA() {
    const [questions, setQuestions] = useState([
        {
            title: "연구실 지원 요건이 궁금합니다.",
            content: "학부 3학년 이상이어야 하고, 기본 프로그래밍 역량이 필요합니다.",
            answer: "학부 3학년 이상, 기본 프로그래밍 역량 필요."
        },
        {
            title: "외부인 방문 가능합니까?",
            content: "외부인도 연구실을 방문할 수 있는지 궁금합니다.",
            answer: "사전 연락 후 가능합니다."
        },
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
            <form className="card p-4 shadow mb-5 bg-light border-0" onSubmit={handleSubmit} style={{ borderRadius: 0 }}>
                <h5 className="mb-3">질문 작성하기</h5>
                <div className="mb-3">
                    <input
                        type="text"
                        className={`form-control ${validated && !titleInput ? "is-invalid" : ""}`}
                        placeholder="제목을 입력하세요"
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)}
                        style={{ borderRadius: 0 }}
                    />
                </div>
                <div className="mb-3">
          <textarea
              className={`form-control ${validated && !contentInput ? "is-invalid" : ""}`}
              placeholder="내용을 입력하세요"
              rows={3}
              value={contentInput}
              onChange={e => setContentInput(e.target.value)}
              style={{ borderRadius: 0 }}
          />
                </div>
                <button type="submit" className="btn btn-primary shadow px-4 fw-bold" style={{ borderRadius: 0 }}>
                    등록
                </button>
            </form>
            <Accordion activeKey={activeKey} onSelect={setActiveKey} className="shadow" style={{ borderRadius: 0 }}>
                {questions.map((item, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx} style={{ borderRadius: 0 }}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                            <div className="mb-2"><strong>질문 내용:</strong> {item.content}</div>
                            <div className="mb-2">
                                <strong>답변:</strong> {item.answer ? (
                                <span>{item.answer}</span>
                            ) : (
                                <span className="text-secondary">아직 답변이 등록되지 않았습니다.</span>
                            )}
                            </div>
                            <div className="mt-3">
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    style={{ borderRadius: 0 }}
                                    onClick={() => handleAdminAnswer(idx)}
                                >
                                    관리자 답변 등록
                                </Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default QnA;
