import express from "express";
import {
  createKos,
  deleteKos,
  getAllKos,
  getKos,
  updateKos,
} from "../controllers/kos.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createKos);
router.put("/:id", verifyAdmin, updateKos);
router.delete("/:id", verifyAdmin, deleteKos);
router.get("/:id", getKos);
router.get("/", getAllKos);

export default router;
