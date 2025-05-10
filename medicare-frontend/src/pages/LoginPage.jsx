import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("✅ Logged in successfully");
      navigate("/patient-dashboard");
    } catch (err) {
      alert("❌ Invalid credentials. Try test@user.com / 1234");
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Welcome to Healthcare Appointment Booking</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Patient Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>

        <p style={{ marginTop: "10px" }}>
          New? <a href="/register">Register</a> | <a href="/doctor-login">Doctor Login</a>
        </p>
      </form>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f3d9ff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif"
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#4a148c",
    marginBottom: "20px"
  },
  form: {
    background: "#fff0ff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#9c27b0",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default LoginPage;
