import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// 파일 상단에 추가
function getUniqueId() {
    return `${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}

export default function AskForm({ onSubmit, onClose }) {
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [agree, setAgree] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titleInput || !contentInput || !phoneInput || !agree) {
            setValidated(true);
            return;
        }

        // handleSubmit 내부
        const newQuestion = {
            id: getUniqueId(),
            title: titleInput,
            content: contentInput,
            answer: null,
            createdAt: new Date().toLocaleString(),
            phone: phoneInput,
        };

        onSubmit(newQuestion);

        // 초기화 (QnA로 이동하므로 필요 없지만, 유지)
        setTitleInput("");
        setContentInput("");
        setPhoneInput("");
        setAgree(false);
        setValidated(false);
    };

    return (
        <>
            {onClose && (
                <div className="text-end mb-2">
                    <Button variant="light" onClick={onClose}>
                        닫기
                    </Button>
                </div>
            )}

            <form
                className="card p-4 shadow mb-5 bg-light border-0"
                onSubmit={handleSubmit}
            >
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
                <div className="mb-3">
                    <input
                        type="tel"
                        className={`form-control ${validated && !phoneInput ? "is-invalid" : ""}`}
                        placeholder="답변 알림을 받을 휴대폰 번호를 입력하세요 (- 포함, ex. 010-1234-5678)"
                        value={phoneInput}
                        onChange={e => setPhoneInput(e.target.value)}
                    />
                    <div className="form-text">
                        답변이 등록되면 입력하신 번호로 알림을 받을 수 있습니다.
                    </div>
                </div>
                <div className="mb-3 form-check d-flex align-items-center">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreeCheck"
                        checked={agree}
                        onChange={e => setAgree(e.target.checked)}
                    />
                    <label className="form-check-label ms-1" htmlFor="agreeCheck">
                        (필수) 전화번호 등 개인정보 수집·이용 동의
                    </label>
                    <Button
                        variant="link"
                        className="ms-2 p-0"
                        style={{ fontSize: "0.95em" }}
                        onClick={() => setShowModal(true)}
                    >
                        자세히 보기
                    </Button>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!agree}>
                    등록
                </button>
            </form>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>개인정보 수집·이용 안내</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        본 서비스는 문의에 대한 답변 알림을 위해 휴대전화번호를 수집합니다.<br/>
                        <strong>수집항목:</strong> 휴대전화번호<br/>
                        <strong>수집목적:</strong> 답변 등록 시 문자 알림 발송<br/>
                        <strong>보유 및 이용기간:</strong> 답변 알림 발송 후 1년 이내 파기<br/>
                        <strong>관련 법률:</strong> 개인정보보호법 제15조, 제22조
                    </p>
                    <ul>
                        <li>이용자는 개인정보 수집 및 이용에 관한 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 알림 제공이 제한될 수 있습니다.</li>
                        <li>기타 사항은 개인정보처리방침을 따릅니다.</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}