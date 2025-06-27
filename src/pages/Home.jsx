import { useRef, useState, useEffect } from "react";
import "../index.css";

const imageList = [
    "/LabSite/img/React-icon.png",
    "/LabSite/img/springboot-icon.png",
    "/LabSite/img/fastapi.svg",
    "/LabSite/img/AI-icon.png"
];

function Home() {
    const [videoEnded, setVideoEnded] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const timeoutRef = useRef();

    const handleVideoEnd = () => {
        setVideoEnded(true);
        timeoutRef.current = setTimeout(() => setShowCard(true), 320);
    };

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return (
        <div className="home-container">
            {/* 1. 배경 비디오 */}
            <video
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="bg-video"
                >
            <source src="/LabSite/video/video.webm" type="video/webm" />
                Your browser does not support the video tag.
        </video>

            {/* 2. 흰 배경 트랜지션 */}
            <div className={`bg-fade${videoEnded ? " active" : ""}`}></div>

            <div className={`card-fade${showCard ? " active" : ""}`}>
                {showCard && (
                    <>
                        {/* 이미지 리스트를 카드 위쪽 가운데 정렬로 보여줌 */}
                        <div className="d-flex justify-content-center align-items-center mb-3 gap-4">
                            {imageList.map((src, idx) => (
                                <img
                                    key={src + idx}
                                    src={src}
                                    alt={`tech-logo-${idx}`}
                                    style={{
                                        height: 56,
                                        objectFit: "contain"
                                    }}
                                    className="tech-image"
                                    draggable="false"
                                />
                            ))}
                        </div>
                        <div className="card shadow-lg border-0 p-5 text-center bg-light home-card">
                            <div className="mb-4">
                                <img
                                    src="/LabSite/img/logo.png"
                                    alt="logo"
                                    className="home-logo"
                                />np
                            </div>
                            <h1 className="display-5 mb-3 fw-bold">Welcome to i-turtle Lab!</h1>
                            <p className="lead mb-4">
                                최신 연구와 혁신이 이루어지는 우리 연구실에 오신 것을 환영합니다.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;