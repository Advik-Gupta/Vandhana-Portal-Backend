import express from "express";
const router = express.Router();
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

import {
  getMachines,
  getMachineById,
  getLatestDueDate,
  updateLatestDueDate,
  createMachine,
  uploadMachineData,
  updateTestSiteData,
  updateTestPointDataStatus,
  createTestSite,
  updateMachine,
} from "../controllers/machineController.js";

router.route("/").get(getMachines).post(createMachine);
router
  .route("/:id")
  .get(getMachineById)
  .put(createTestSite)
  .patch(updateMachine);
router.post("/:id/upload", upload.any(), uploadMachineData);
router.route("/:id/date").get(getLatestDueDate).patch(updateLatestDueDate);
router.route("/:id/:testSiteNumber").put(updateTestSiteData);
router.route("/:id/:testSiteNumber/:pointNo").put(updateTestPointDataStatus);

export default router;
