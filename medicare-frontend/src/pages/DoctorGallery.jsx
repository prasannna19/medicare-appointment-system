import React from "react";
import { useNavigate } from "react-router-dom";

const doctors = [
  { name: "Dr. Rahul Verma", specialty: "Pediatrician", image: "/doc1.png" },
  { name: "Dr. Sneha Patel", specialty: "Orthopedic", image: "/doc2.png" },
  { name: "Dr. Cherukuri Vyshnavi", specialty: "Cardiologist", image: "/doc3.png" },
  { name: "Dr. Anjali Mehra", specialty: "Dermatologist", image: "/doc4.png" },
  { name: "Dr. Kiran Deshmukh", specialty: "Neurologist", image: "/doc5.png" },
  { name: "Dr. Farhan Qureshi", specialty: "ENT Specialist", image: "/doc6.png" },
  { name: "Dr. Meera Sinha", specialty: "Psychiatrist", image: "/doc7.png" },
  { name: "Dr. Vikram Reddy", specialty: "Dentist", image: "/doc8.png" },
  { name: "Dr. Ayesha Khan", specialty: "Gynecologist", image: "/doc9.png" },
  { name: "Dr. Rajeev Iyer", specialty: "General Physician", image: "/doc10.png" }
];

const DoctorGallery = () => {
  const navigate = useNavigate();

  const handleBook = (doctorName) => {
    localStorage.setItem("selectedDoctor", doctorName);
    navigate("/book-appointment");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏥 Meet Our Doctors</h2>
      <div style={styles.grid}>
        {doctors.map((doc, index) => (
          <div key={index} style={styles.card}>
            <img src={doc.image} alt={doc.name} style={styles.image} />
            <p style={styles.name}>{doc.name}</p>
            <p style={styles.specialty}>{doc.specialty}</p>
            <button style={styles.button} onClick={() => handleBook(doc.name)}>
              📅 Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f3f9ff",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  heading: {
    fontSize: "28px",
    color: "#1976d2",
    marginBottom: "30px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "30px",
    justifyContent: "center"
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #90caf9",
    marginBottom: "10px"
  },
  name: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#333"
  },
  specialty: {
    fontSize: "13px",
    color: "#777"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px"
  }
};

export default DoctorGallery;
