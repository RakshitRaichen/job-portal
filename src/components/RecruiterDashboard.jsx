import { useState } from "react";

function RecruiterDashboard({ goHome, jobs, setJobs }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");

  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  function clearForm() {
    setTitle("");
    setCompany("");
    setSalary("");
    setLocation("");
    setEditingIndex(null);
  }

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

    if (editingIndex !== null) {
      const updatedJobs = [...jobs];

      updatedJobs[editingIndex] = {
        title,
        company,
        salary,
        location,
      };

      setJobs(updatedJobs);

      alert("Job Updated Successfully");
    } else {
      const newJob = {
        title,
        company,
        salary,
        location,
      };

      setJobs([...jobs, newJob]);

      alert("Job Posted Successfully");
    }

    clearForm();
  }

  function deleteJob(index) {
    const updatedJobs = jobs.filter((_, i) => i !== index);

    setJobs(updatedJobs);
  }

  function editJob(index) {
    setTitle(jobs[index].title);
    setCompany(jobs[index].company);
    setSalary(jobs[index].salary);
    setLocation(jobs[index].location);

    setEditingIndex(index);
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h1>Recruiter Dashboard</h1>

      <p>
        Manage your job postings and find the right candidates.
      </p>

      {/* Statistics */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
          flexWrap: "wrap",
        }}
      >
        <div className="job-card">
          <h3>Total Jobs</h3>
          <h2>{jobs.length}</h2>
        </div>

        <div className="job-card">
          <h3>Active Postings</h3>
          <h2>{jobs.length}</h2>
        </div>
      </div>

      <hr />

      {/* Post / Edit Job */}

      <h2>
        {editingIndex !== null
          ? "Edit Job"
          : "Post New Job"}
      </h2>

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
        {editingIndex !== null
          ? "Update Job"
          : "Post Job"}
      </button>

      <button onClick={clearForm}>
        Clear
      </button>

      <hr />

      {/* Search */}

      <h2>Manage Jobs</h2>

      <input
        type="text"
        placeholder="Search jobs, companies or locations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>
        {filteredJobs.length} Jobs Found
      </h3>

      {/* Job List */}

      {filteredJobs.length === 0 && (
        <p>No jobs found.</p>
      )}

      {filteredJobs.map((job) => {
        const originalIndex = jobs.indexOf(job);

        return (
          <div
            key={originalIndex}
            className="job-card"
          >
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong>{" "}
              {job.company}
            </p>

            <p>
              <strong>Salary:</strong>{" "}
              {job.salary}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {job.location}
            </p>

            <button
              onClick={() =>
                editJob(originalIndex)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteJob(originalIndex)
              }
              style={{
                background: "crimson",
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <button onClick={goHome}>
        Logout
      </button>
    </div>
  );
}

export default RecruiterDashboard;