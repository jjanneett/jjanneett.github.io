function Papers() {
    const papers = [
        { title: "AI 기반 데이터 분석", author: "홍길동 외", year: 2024, link: "#" },
        { title: "HCI UX 연구", author: "이영희 외", year: 2023, link: "#" },
    ];
    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4 ">논문 목록</h2>
            <ul className="list-group shadow">
                {papers.map((p, idx) => (
                    <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="fw-semibold">{p.title}</a>
              <br /><small>{p.author} ({p.year})</small>
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Papers;
