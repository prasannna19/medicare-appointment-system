const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: String,
  patientName: String,
  patientPhone: String,
  date: String,
  time: String,
  symptoms: String,
  status: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
