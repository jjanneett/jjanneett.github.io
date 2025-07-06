import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Notices({ isLoggedIn }) {
    const [notices, setNotices] = useState([
        // ... 기존 데이터
    ]);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);

    // 등록/수정 모달 관련
    const [showEdit, setShowEdit] = useState(false);
    const [editIdx, setEditIdx] = useState(null);
    const [editNotice, setEditNotice] = useState({
        title: "",
        author: "",
        date: "",
        time: "",
        content: "",
    });

    // 파일 첨부 관련 state
    const [files, setFiles] = useState([]);

    const handleOpen = (notice, idx) => {
        setSelected(notice);
        setEditIdx(idx);
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
        setSelected(null);
        setEditIdx(null);
    };

    // 모달 열기 - 등록/수정
    const handleShowEditModal = (mode) => {
        if (mode === "add") {
            setEditNotice({
                title: "",
                author: "",
                date: new Date().toISOString().slice(0, 10),
                time: new Date().toTimeString().slice(0, 5),
                content: "",
            });
            setFiles([]);
            setEditIdx(null);
        } else if (mode === "edit" && selected) {
            setEditNotice({ ...selected });
            setFiles(selected.files || []);
        }
        setShowEdit(true);
    };

    const handleEditChange = (e) => {
        setEditNotice({ ...editNotice, [e.target.name]: e.target.value });
    };

    // 파일 변화 시
    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    // 저장(등록/수정)
    const handleSave = () => {
        if (!editNotice.title || !editNotice.author || !editNotice.content) {
            alert("제목, 작성자, 내용을 입력하세요.");
            return;
        }
        const noticeWithFiles = {
            ...editNotice,
            files,
        };
        if (editIdx !== null) {
            const newNotices = [...notices];
            newNotices[editIdx] = noticeWithFiles;
            setNotices(newNotices);
        } else {
            setNotices([noticeWithFiles, ...notices]);
        }
        setShowEdit(false);
        handleClose();
    };

    // 삭제
    const handleDelete = () => {
        if (editIdx !== null && window.confirm("정말 삭제하시겠습니까?")) {
            const newNotices = notices.filter((_, idx) => idx !== editIdx);
            setNotices(newNotices);
            handleClose();
        }
    };

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">공지사항</h2>
            {isLoggedIn && (
                <div className="mb-3 text-end">
                    <Button variant="primary" onClick={() => handleShowEditModal("add")}>
                        공지 등록
                    </Button>
                </div>
            )}
            <div className="list-group shadow">
                {notices.map((notice, idx) => (
                    <button
                        key={idx}
                        className="list-group-item list-group-item-action text-start"
                        onClick={() => handleOpen(notice, idx)}
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

            {/* 상세 모달 */}
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
                    {/* 파일 첨부 리스트(상세 모달에서도 표시) */}
                    {selected?.files && selected.files.length > 0 && (
                        <div className="mt-3">
                            <strong>첨부파일:</strong>
                            <ul>
                                {selected.files.map((file, i) => (
                                    <li key={i}>
                                        {/* 실제 서비스에서는 서버에 올린 뒤 다운로드 링크로 제공 */}
                                        {file.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Modal.Body>
                {isLoggedIn && (
                    <Modal.Footer className="border-0">
                        <Button variant="secondary" onClick={() => handleShowEditModal("edit")}>
                            수정
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            삭제
                        </Button>
                    </Modal.Footer>
                )}
            </Modal>

            {/* 등록/수정 모달 */}
            <Modal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                centered
                backdrop="static"
                keyboard={false}
                contentClassName="border-0"
            >
                <Modal.Header className="border-0">
                    <Modal.Title>
                        {editIdx !== null ? "공지 수정" : "공지 등록"}
                    </Modal.Title>
                    <Button
                        variant=""
                        onClick={() => setShowEdit(false)}
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
                <Modal.Body style={{ background: "#fff" }}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="제목"
                            value={editNotice.title}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="author"
                            placeholder="작성자"
                            value={editNotice.author}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="content"
                            placeholder="내용"
                            rows={4}
                            value={editNotice.content}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">첨부 파일</label>
                        <input
                            className="form-control"
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                        {/* 현재 선택된 파일 미리보기 */}
                        {files && files.length > 0 && (
                            <ul className="mt-2">
                                {files.map((file, i) => (
                                    <li key={i}>{file.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="primary" onClick={handleSave}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Notices;