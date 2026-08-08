import { useState } from "react";

function Recruiter({ goHome, loginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h1>Recruiter Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={loginSuccess}>
        Login
      </button>

      <button onClick={goHome}>
        Back
      </button>
    </div>
  );
}

export default Recruiter;