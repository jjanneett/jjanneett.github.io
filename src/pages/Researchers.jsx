function Researchers() {
    const researchers = [
        { name: "김지현", major: "AI" },
        { name: "이성학", major: "AI" },
        { name: "김건우", major: "Web" },
        { name: "김예은", major: "Web" },
        { name: "김이삭", major: "Web" },
        { name: "맹동훈", major: "Web" },
        { name: "김근호", major: "Web" },
        { name: "박은서", major: "..." },
        { name: "윤성현", major: "Web" },
        { name: "이승수", major: "Web" },
        // 추가 연구원...
    ];
    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">연구원 소개</h2>
            <div className="row g-4">
                {researchers.map((r, idx) => (
                    <div key={idx} className="col-md-4">
                        <div className="card shadow-lg border-0 rounded-4 text-center p-3 bg-light">
                            <h5 className="mb-1 fw-semibold">{r.name}</h5>
                            <span className="text-muted">{r.major}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Researchers;
