import React, { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const defaultDoctor = localStorage.getItem("selectedDoctor") || "";

  const [form, setForm] = useState({
    doctor: defaultDoctor,
    date: "",
    time: "",
    symptoms: ""
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const doctors = [
    { name: "Dr. Rahul Verma", specialty: "Pediatrician" },
    { name: "Dr. Sneha Patel", specialty: "Orthopedic" },
    { name: "Dr. Cherukuri Vyshnavi", specialty: "Cardiologist" },
    { name: "Dr. Anjali Mehra", specialty: "Dermatologist" },
    { name: "Dr. Kiran Deshmukh", specialty: "Neurologist" },
    { name: "Dr. Farhan Qureshi", specialty: "ENT Specialist" },
    { name: "Dr. Meera Sinha", specialty: "Psychiatrist" },
    { name: "Dr. Vikram Reddy", specialty: "Dentist" },
    { name: "Dr. Ayesha Khan", specialty: "Gynecologist" },
    { name: "Dr. Rajeev Iyer", specialty: "General Physician" }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      patientName: user.name,
      patientPhone: user.phone,
      status: "Pending"
    };

    try {
      await axios.post("http://localhost:5000/api/appointments/book", payload);
      alert("✅ Appointment Booked Successfully");
      setForm({ doctor: "", date: "", time: "", symptoms: "" });
      localStorage.removeItem("selectedDoctor");
    } catch (err) {
      alert("❌ Failed to book appointment");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📅 Book an Appointment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Select Doctor</label>
        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">-- Choose a Doctor --</option>
          {doctors.map((doc, idx) => (
            <option key={idx} value={doc.name}>
              {doc.name} ({doc.specialty})
            </option>
          ))}
        </select>

        <label style={styles.label}>Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Time</label>
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Symptoms / Reason</label>
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          rows="3"
          placeholder="Optional..."
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: "#f0faff",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#1976d2"
  },
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "left"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px"
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default BookAppointment;
