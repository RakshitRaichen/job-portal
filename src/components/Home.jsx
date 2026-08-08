function Home({ goCandidate, goRecruiter }) {
  return (
    <div
      style={{
        marginTop: "60px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#1e3a8a",
        }}
      >
        Find Your Dream Job
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginTop: "20px",
          color: "#555",
        }}
      >
        Search thousands of jobs from top companies.
      </p>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <button
          onClick={goCandidate}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
          }}
        >
          Candidate Login
        </button>

        <button
          onClick={goRecruiter}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            marginLeft: "20px",
          }}
        >
          Recruiter Login
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "80px",
        }}
      >
        <div className="job-card">
          <h3>1000+</h3>
          <p>Jobs Available</p>
        </div>

        <div className="job-card">
          <h3>500+</h3>
          <p>Companies</p>
        </div>

        <div className="job-card">
          <h3>10K+</h3>
          <p>Candidates</p>
        </div>
      </div>
    </div>
  );
}

export default Home;