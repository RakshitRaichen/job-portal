import { useState } from "react";

function CandidateDashboard({ goHome, jobs, goProfile }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const locations = [...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  function applyJob(index) {
    if (!appliedJobs.includes(index)) {
      setAppliedJobs([...appliedJobs, index]);
      alert("Applied Successfully!");
    }
  }

  function saveJob(index) {
    if (savedJobs.includes(index)) {
      setSavedJobs(savedJobs.filter((jobIndex) => jobIndex !== index));
    } else {
      setSavedJobs([...savedJobs, index]);
    }
  }

  return (
    <div className="dashboard-container">

      <h1>Candidate Dashboard</h1>

      <h2>Find Your Next Job</h2>

      <input
        type="text"
        placeholder="Search job or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          padding: "12px",
          margin: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      >
        <option value="">All Locations</option>

        {locations.map((locationName, index) => (
          <option key={index} value={locationName}>
            {locationName}
          </option>
        ))}
      </select>

      <h3>
        {filteredJobs.length} Jobs Found
      </h3>

      {filteredJobs.length === 0 && (
        <p>No jobs found.</p>
      )}

      {filteredJobs.map((job, index) => {

        const originalIndex = jobs.indexOf(job);

        const isApplied = appliedJobs.includes(originalIndex);
        const isSaved = savedJobs.includes(originalIndex);

        return (
          <div
            key={originalIndex}
            className="job-card"
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
              onClick={() => applyJob(originalIndex)}
              disabled={isApplied}
              style={{
                background: isApplied
                  ? "green"
                  : "royalblue",
              }}
            >
              {isApplied ? "Applied ✓" : "Apply"}
            </button>

            <button
              onClick={() => saveJob(originalIndex)}
              style={{
                background: isSaved
                  ? "orange"
                  : "gray",
              }}
            >
              {isSaved ? "Saved ❤️" : "Save ♡"}
            </button>

          </div>
        );
      })}
      <button onClick={goProfile}>
  My Profile
</button>

      <button onClick={goHome}>
        Logout
      </button>

    </div>
  );
}

export default CandidateDashboard;