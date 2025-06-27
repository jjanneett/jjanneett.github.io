function Researchers() {
    const researchers = [
        { name: "김철수", major: "AI" },
        { name: "이영희", major: "Data Science" },
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
