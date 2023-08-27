import express from "express";
import {
  createKos,
  deleteKos,
  getAllKos,
  getKos,
  updateKos,
} from "../controllers/kos.js";
const router = express.Router();

router.post("/", createKos);
router.put("/:id", updateKos);
router.delete("/:id", deleteKos);
router.get("/:id", getKos);
router.get("/", getAllKos);

export default router;
