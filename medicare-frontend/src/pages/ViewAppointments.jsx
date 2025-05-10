import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/appointments/patient/${user.phone}`
        );
        setAppointments(res.data);
      } catch (error) {
        console.error("❌ Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [user.phone]);

  const handleCancel = async (id) => {
    if (!window.confirm("Cancel this appointment?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/appointments/cancel/${id}`);
      alert("❌ Appointment cancelled");
      setAppointments(appointments.filter((appt) => appt._id !== id));
    } catch (error) {
      alert("Failed to cancel");
    }
  };

  return (
    <div style={styles.container}>
      <img src="/appointments.png" alt="Appointments" style={styles.mainImage} />
      <h2 style={styles.heading}>📅 My Appointments</h2>

      {/* Doctor Profiles */}
      <div style={styles.doctorsRow}>
        <div style={styles.docProfile}>
          <img src="/doc1.png" alt="Dr. Rahul Verma" style={styles.docImage} />
          <p style={styles.docName}>Dr. Rahul Verma</p>
          <p style={styles.docSpec}>Pediatrician</p>
        </div>
        <div style={styles.docProfile}>
          <img src="/doc2.png" alt="Dr. Sneha Patel" style={styles.docImage} />
          <p style={styles.docName}>Dr. Sneha Patel</p>
          <p style={styles.docSpec}>Orthopedic</p>
        </div>
        <div style={styles.docProfile}>
          <img src="/doc3.png" alt="Dr. Cherukuri Vyshnavi" style={styles.docImage} />
          <p style={styles.docName}>Dr. Cherukuri Vyshnavi</p>
          <p style={styles.docSpec}>Cardiologist</p>
        </div>
      </div>

      {/* Appointments List */}
      {appointments.length === 0 ? (
        <p style={styles.noData}>No appointments found.</p>
      ) : (
        <div style={styles.list}>
          {appointments.map((appt, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.doctor}>Dr. {appt.doctor}</h3>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      appt.status === "Approved"
                        ? "green"
                        : appt.status === "Rejected"
                        ? "red"
                        : "#999",
                  }}
                >
                  {appt.status}
                </span>
              </p>
              {appt.symptoms && <p><strong>Reason:</strong> {appt.symptoms}</p>}
              <button
                onClick={() => handleCancel(appt._id)}
                style={styles.cancelButton}
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f7faff",
    padding: "30px 20px",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  mainImage: {
    width: "70%",
    maxWidth: "800px",
    marginBottom: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "26px",
    color: "#3f51b5",
    marginBottom: "20px",
  },
  noData: {
    fontSize: "16px",
    color: "#999",
  },
  doctorsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  docProfile: {
    textAlign: "center",
    maxWidth: "150px",
  },
  docImage: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  docName: {
    fontSize: "16px",
    marginTop: "10px",
    fontWeight: "600",
    color: "#333",
  },
  docSpec: {
    fontSize: "13px",
    color: "#888",
    marginTop: "4px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    textAlign: "left",
  },
  doctor: {
    color: "#1976d2",
    marginBottom: "10px",
  },
  cancelButton: {
    backgroundColor: "#ef5350",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  }
};

export default ViewAppointments;
