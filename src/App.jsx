import { useState } from "react";
import Home from "./components/Home";
import Candidate from "./components/Candidate";
import Recruiter from "./components/Recruiter";
import CandidateDashboard from "./components/CandidateDashboard";
import RecruiterDashboard from "./components/RecruiterDashboard";

function App() {
  const [page, setPage] = useState("home");

  const [jobs, setJobs] = useState([
    
    {
      title: "React Developer",
      company: "Google",
      salary: "18 LPA",
      location: "Bangalore",
    },
    {
      title: "Java Developer",
      company: "Microsoft",
      salary: "22 LPA",
      location: "Hyderabad",
    },
    {
      title: "Spring Boot Developer",
      company: "Amazon",
      salary: "20 LPA",
      location: "Pune",
    },
    {
      title: "Frontend Developer",
      company: "Adobe",
      salary: "15 LPA",
      location: "Noida",
    },
  ]);

  return (
    <div>
      {page === "home" && (
        <Home
          goCandidate={() => setPage("candidate")}
          goRecruiter={() => setPage("recruiter")}
        />
      )}

      {page === "candidate" && (
        <Candidate
          goHome={() => setPage("home")}
          loginSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && (
        <CandidateDashboard
          goHome={() => setPage("home")}
          jobs={jobs}
        />
      )}

      {page === "recruiter" && (
        <Recruiter
          goHome={() => setPage("home")}
          loginSuccess={() => setPage("recruiterDashboard")}
        />
      )}

      {page === "recruiterDashboard" && (
        <RecruiterDashboard
          goHome={() => setPage("home")}
          jobs={jobs}
          setJobs={setJobs}
        />
      )}
    </div>
  );
}

export default App;