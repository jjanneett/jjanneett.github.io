import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Notices() {
    // 예시 공지 목록
    const [notices] = useState([
        {
            title: "2025년도 신입 연구원 모집",
            author: "관리자",
            date: "2025-06-01",
            time: "14:20",
            content: "2025년 신입 연구원 지원을 받습니다. 자세한 내용은 첨부파일 참고 바랍니다.",
        },
        {
            title: "2025 봄 세미나 안내",
            author: "홍길동",
            date: "2025-05-10",
            time: "09:00",
            content: "봄 세미나가 5월 22일에 진행됩니다. 많은 참석 바랍니다.",
        },
        // ... 추가 공지
    ]);

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);

    // 모달 열기
    const handleOpen = (notice) => {
        setSelected(notice);
        setShow(true);
    };

    // 모달 닫기
    const handleClose = () => {
        setShow(false);
        setSelected(null);
    };

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">공지사항</h2>
            <div className="list-group shadow">
                {notices.map((notice, idx) => (
                    <button
                        key={idx}
                        className="list-group-item list-group-item-action text-start"
                        onClick={() => handleOpen(notice)}
                        style={{ cursor: "pointer", borderRadius: 0 }}
                    >
                        <div className="d-flex justify-content-between">
                            <span className="fw-semibold">{notice.title}</span>
                            <span className="text-muted small">
                                {notice.date} {notice.time}
                            </span>
                        </div>
                        <div className="text-secondary small">{notice.author}</div>
                    </button>
                ))}
            </div>

            {/* 모달 */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                backdrop="static"
                keyboard={false}
                contentClassName="border-0"
                style={{ borderRadius: 0 }}
            >
                <Modal.Header
                    className="border-0"
                    style={{ background: "#f7fafd", borderRadius: 0 }}
                >
                    <Modal.Title>{selected?.title}</Modal.Title>
                    <Button
                        variant=""
                        onClick={handleClose}
                        style={{
                            position: "absolute",
                            right: 20,
                            top: 18,
                            fontSize: "1.7rem",
                            color: "#666",
                            background: "none",
                            border: "none",
                            boxShadow: "none",
                        }}
                        aria-label="닫기"
                    >
                        ×
                    </Button>
                </Modal.Header>
                <Modal.Body style={{ background: "#fff", borderRadius: 0 }}>
                    <div className="mb-2">
                        <strong>작성자:</strong> {selected?.author}
                    </div>
                    <div className="mb-2">
                        <strong>등록일:</strong> {selected?.date} {selected?.time}
                    </div>
                    <hr />
                    <div>{selected?.content}</div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Notices;