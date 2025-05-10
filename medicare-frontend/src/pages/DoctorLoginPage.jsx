import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const validDoctors = [
  {
    phone: "93903358",
    password: "vyshu",
    name: "Dr. Cherukuri Vyshnavi",
  },
  {
    phone: "8888888888",
    password: "sneha",
    name: "Dr. Sneha Patel",
  },
  {
    phone: "7777777777",
    password: "rahul",
    name: "Dr. Rahul Verma",
  },
];

export default function DoctorLoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const doctor = validDoctors.find(
      (doc) => doc.phone === phone && doc.password === password
    );

    if (doctor) {
      localStorage.setItem("doctor", JSON.stringify({ name: doctor.name }));
      alert(`✅ Welcome, ${doctor.name}`);
      navigate("/doctor-dashboard");
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Doctor Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Secret Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.hint}>
        👉 Try <strong>9999999999 / vyshu</strong> for Dr. Cherukuri Vyshnavi
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "28px",
    color: "#1976d2",
    marginBottom: "20px",
  },
  form: {
    display: "inline-block",
    textAlign: "left",
  },
  input: {
    display: "block",
    padding: "10px",
    marginBottom: "15px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  hint: {
    marginTop: "20px",
    color: "#666",
  },
};
