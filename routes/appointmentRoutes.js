const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  getAppointmentsByPatient,
  cancelAppointment,
  getAppointmentsByDoctor,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

router.post("/book", bookAppointment);
router.get("/patient/:phone", getAppointmentsByPatient);
router.get("/doctor/:name", getAppointmentsByDoctor);
router.put("/update/:id", updateAppointmentStatus);
router.delete("/cancel/:id", cancelAppointment);

module.exports = router;
