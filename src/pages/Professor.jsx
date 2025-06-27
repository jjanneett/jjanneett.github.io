function Professor() {
    return (
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                {/* 좌측: 프로필 사진/기본정보 */}
                <div className="col-md-5 col-lg-4 text-center">
                    <img src="/img/Professor.jpeg" alt="방진숙 교수님" className="rounded-circle shadow mb-3 pro-img"/>
                    <h2 className="fw-bold mt-4 mb-2">방진숙</h2>
                    <div className="mb-2">(Jinsuk Bang)</div>
                    <div className="text-secondary mb-2">AI융합대학 컴퓨터공학부</div>
                    <div className="mb-1">TEL : 041-540-5848</div>
                    <div className="mb-1">EMAIL : bluegony@hoseo.edu</div>
                </div>
                {/* 우측: 경력, 논문, 저서 */}
                <div className="col-md-7 col-lg-8">
                    <h5 className="fw-semibold mb-3">경력</h5>
                    <ul>
                        <li>다솜정보 (2014.03 ~ 2020.02)</li>
                    </ul>
                    <h5 className="fw-semibold mt-4 mb-3">논문</h5>
                    <ul>
                        <li>딥러닝 기반 긍정적인 글 작성을 위한 텍스트 스타일 변환 지원 시스템<br/>
                            <span className="text-secondary small">한국정보통신학회논문지, 28권, 11호, pp.1330-1335, 2024.11</span>
                        </li>
                        <li>반려동물의 건강 기능성 식품 추천을 위한 마이크로바이옴데이터 기계독해 시스템<br/>
                            <span className="text-secondary small">한국차세대컴퓨팅학회 논문지, 20권, 1호, pp.7-16, 2024.02</span>
                        </li>
                        <li>이미지 데이터와 1차원 배열 옵티마이저에 따른 정확도 변화<br/>
                            <span className="text-secondary small">한국지식정보기술학회 논문지, 18권, 5호, pp.1082-1089, 2023.10</span>
                        </li>
                        <li>웹서비스 리소스 캐싱에 따른 iframe의 성능 비교 연구<br/>
                            <span className="text-secondary small">지식과 교양, 8권, 9호, pp.206-223, 2021.11</span>
                        </li>
                        <li>Product recommendation system based on user purchase priority<br/>
                            <span className="text-secondary small">Journal of Information and Communication Convergence Engineering, 18권, 1호, pp.55-60, 2020.03</span>
                        </li>
                    </ul>
                    <h5 className="fw-semibold mt-4 mb-3">저서</h5>
                    <ul>
                        <li>인공지능과 데이터 분석 (2023.01)</li>
                        <li>소프트웨어공학 3단계 (2022.09)</li>
                        <li>파이썬을 이용한 웹크롤링과 데이터 분석 (2021.09)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Professor;
