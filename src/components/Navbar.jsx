function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>Job Portal</h2>

      <div>
        <span style={{ marginRight: "20px", cursor: "pointer" }}>Home</span>
        <span style={{ marginRight: "20px", cursor: "pointer" }}>Jobs</span>
        <span style={{ cursor: "pointer" }}>About</span>
      </div>
    </nav>
  );
}

export default Navbar;