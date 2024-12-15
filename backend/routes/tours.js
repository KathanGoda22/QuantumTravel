import express from "express";
import {
  getAllTour,
  createTour,
  deleteTour,
  updateTour,
  getSingleTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCount
} from "../controllers/tourcontroller.js";
import { verifyAdmin } from "../utlis/verifyToken.js";

const router = express.Router();

//create tour
router.post("/", verifyAdmin, createTour);

//update tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//single tour
router.get("/:id", getSingleTour);

//all tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//get featured tour
router.get("/search/getFeaturedTours", getFeaturedTours);

//get tourCount
router.get("/search/getTourCount", getTourCount);

export default router;
