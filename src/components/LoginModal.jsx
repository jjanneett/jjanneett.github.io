import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';

export default function LoginModal({ show, handleClose, handleLogin }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(id, password);
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            contentClassName="login-modal-content"
            backdrop="static"
            keyboard={false}
        >
            <Modal.Body className="p-5 d-flex flex-column align-items-center bg-dark text-light rounded-4 shadow-lg login-modal-body">
                <h2
                    className="mb-4 fw-bold"
                    style={{
                        fontFamily: 'Chaney, sans-serif',
                        fontSize: '2.7rem',
                        letterSpacing: '1px',
                    }}
                >
                    Login
                </h2>
                <Form onSubmit={onSubmit} className="w-100" style={{ maxWidth: 360 }}>
                    <FloatingLabel controlId="loginId" label="ID" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="ID"
                            value={id}
                            autoFocus
                            onChange={(e) => setId(e.target.value)}
                            className="rounded-3 bg-light-subtle border-0 px-3 py-2 shadow-sm login-input"
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="loginPassword" label="PASSWORD" className="mb-4">
                        <Form.Control
                            type="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-3 bg-light-subtle border-0 px-3 py-2 shadow-sm login-input"
                            required
                        />
                    </FloatingLabel>
                    <Button
                        type="submit"
                        className="w-100 py-2 fw-bold fs-5 rounded-4 login-btn"
                        style={{
                            background: 'linear-gradient(90deg,#e0c3fc 0%, #8ec5fc 100%)',
                            border: 'none',
                            color: '#222',
                            boxShadow: '0 2px 16px 0 rgba(150,150,200,0.2)',
                        }}
                    >
                        LOGIN
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}