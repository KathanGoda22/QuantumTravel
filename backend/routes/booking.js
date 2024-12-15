import express from "express";
import { verifyAdmin, verifyUser } from "../utlis/verifyToken.js";
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingcontroller.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
