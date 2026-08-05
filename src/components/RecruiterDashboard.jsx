import { useState } from "react";

function RecruiterDashboard({ goHome, jobs, setJobs }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");

  function postJob() {
    if (
      title.trim() === "" ||
      company.trim() === "" ||
      salary.trim() === "" ||
      location.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newJob = {
      title,
      company,
      salary,
      location,
    };

    setJobs([...jobs, newJob]);

    alert("Job Posted Successfully");

    setTitle("");
    setCompany("");
    setSalary("");
    setLocation("");
  }

  return (
    <div>
      <h1>Recruiter Dashboard</h1>

      <h2>Post New Job</h2>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br />
      <br />

      <button onClick={postJob}>
        Post Job
      </button>

      <button onClick={goHome}>
        Logout
      </button>

      <hr />

      <h2>All Posted Jobs</h2>

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
        </div>
      ))}
    </div>
  );
}

export default RecruiterDashboard;