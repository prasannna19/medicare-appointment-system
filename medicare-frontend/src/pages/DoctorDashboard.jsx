import React, { useState } from "react";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    {
      _id: "1",
      patientName: "Niharika",
      patientPhone: "8247057420",
      doctor: "Dr. Cherukuri Vyshnavi",
      date: "2025-07-06",
      time: "06:00",
      symptoms: "Body heart checkup",
      status: "Pending"
    },
    {
      _id: "2",
      patientName: "Niharika",
      patientPhone: "8247057420",
      doctor: "Dr. Cherukuri Vyshnavi",
      date: "2025-07-07",
      time: "20:00",
      symptoms: "General fatigue",
      status: "Pending"
    },
    {
      _id: "3",
      patientName: "Ravi Teja",
      patientPhone: "9999999999",
      doctor: "Dr. Cherukuri Vyshnavi",
      date: "2025-07-08",
      time: "10:30",
      symptoms: "Chest pain",
      status: "Pending"
    }
  ]);

  const updateStatus = (id, status) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt._id === id ? { ...appt, status } : appt
      )
    );
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", background: "#f0f8ff", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", color: "#1565c0" }}>
        🩺 Doctor Dashboard - Appointments for Dr. Cherukuri Vyshnavi
      </h2>
      {appointments.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No appointments found.</p>
      ) : (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {appointments.map((appt) => (
            <div key={appt._id} style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)"
            }}>
              <p><strong>Patient:</strong> {appt.patientName}</p>
              <p><strong>Phone:</strong> {appt.patientPhone}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p><strong>Symptoms:</strong> {appt.symptoms}</p>
              <p><strong>Status:</strong> {appt.status}</p>
              {appt.status === "Pending" && (
                <div style={{ marginTop: "10px" }}>
                  <button onClick={() => updateStatus(appt._id, "Approved")}
                    style={{ backgroundColor: "green", color: "#fff", padding: "8px 12px", marginRight: "10px", border: "none", borderRadius: "6px" }}>
                    ✅ Approve
                  </button>
                  <button onClick={() => updateStatus(appt._id, "Rejected")}
                    style={{ backgroundColor: "red", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "6px" }}>
                    ❌ Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
