import React from "react";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* 🔴 Logout Button */}
      <button onClick={logout} style={styles.logout}>🚪 Logout</button>

      <div style={styles.left}>
        <img src="/appointments.png" alt="Welcome" style={styles.image} />
      </div>

      <div style={styles.card}>
        <h2 style={styles.title}>Welcome, {user?.name} 👋</h2>
        <p style={styles.text}>Dashboard.</p>
        <p style={styles.subText}>Your Health, Our Priority — Book Trusted Doctors with Just a Click</p>

        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => navigate("/book-appointment")}>📅 Book Appointment</button>
          <button style={styles.button} onClick={() => navigate("/view-appointments")}>👀 View Appointments</button>
          <button style={styles.button} onClick={() => navigate("/view-appointments")}>❌ Cancel Appointment</button>
          <button style={styles.button} onClick={() => navigate("/doctors")}>🧑‍⚕️ View Doctors</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#eaf4ff",
    padding: "30px",
    flexWrap: "wrap",
    position: "relative", // Needed for absolute logout button
  },
  logout: {
    position: "absolute",
    top: "20px",
    right: "30px",
    backgroundColor: "#ff7043", // soft red-orange
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  left: {
    marginRight: "30px",
  },
  image: {
    width: "500px",
    borderRadius: "16px",
  },
  card: {
    backgroundColor: "yellow",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "44px",
    color: "#1976d2",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  subText: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "black",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default PatientDashboard;
