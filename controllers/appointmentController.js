const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
  try {
    const newAppt = await Appointment.create(req.body);
    res.json(newAppt);
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
};

exports.getAppointmentsByPatient = async (req, res) => {
  try {
    const appts = await Appointment.find({ patientPhone: req.params.phone });
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
};

exports.getAppointmentsByDoctor = async (req, res) => {
  try {
    const appts = await Appointment.find({ doctor: req.params.name });
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Cancelled" });
  } catch (err) {
    res.status(500).json({ message: "Cancel failed" });
  }
};

exports.updateAppointmentStatus = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
