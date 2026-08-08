import { useState } from "react";

function CandidateProfile({ goBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");

  function saveProfile() {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      skills.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Profile Saved Successfully");
  }

  return (
    <div className="profile-container">
      <h1>Candidate Profile</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Skills e.g. React, Java, Spring Boot"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <br />
      <br />

      <button onClick={saveProfile}>
        Save Profile
      </button>

      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default CandidateProfile;