import { useState } from "react";

function RecruiterDashboard({ goHome, jobs, setJobs }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");

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

  return (
    <div>

      <h1>Recruiter Dashboard</h1>

      <h2>{editingIndex !== null ? "Edit Job" : "Post New Job"}</h2>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <button onClick={postJob}>
        {editingIndex !== null ? "Update Job" : "Post Job"}
      </button>

      <button onClick={clearForm}>
        Clear
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
            border: "1px solid gray",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px",
          }}
        >

          <h3>{job.title}</h3>

          <p><strong>Company:</strong> {job.company}</p>

          <p><strong>Salary:</strong> {job.salary}</p>

          <p><strong>Location:</strong> {job.location}</p>

          <button
            onClick={() => editJob(index)}
          >
            Edit
          </button>

          <button
            onClick={() => deleteJob(index)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default RecruiterDashboard;