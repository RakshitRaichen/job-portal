function CandidateDashboard({ goHome, jobs }) {
  return (
    <div>
      <h1>Candidate Dashboard</h1>

      <h2>Available Jobs</h2>

      {jobs.map((job, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{job.title}</h3>

          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <p>
            <strong>Salary:</strong> {job.salary}
          </p>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <button
            onClick={() => alert(`Applied for ${job.title}`)}
          >
            Apply
          </button>
        </div>
      ))}

      <button onClick={goHome}>
        Logout
      </button>
    </div>
  );
}

export default CandidateDashboard;