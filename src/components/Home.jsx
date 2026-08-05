function Home({ goCandidate, goRecruiter }) {
  return (
    <div>
      <h1>Job Portal</h1>

      <p>Welcome to our Job Portal</p>

      <button onClick={goCandidate}>
        Candidate Login
      </button>

      <button onClick={goRecruiter}>
        Recruiter Login
      </button>
    </div>
  );
}

export default Home;