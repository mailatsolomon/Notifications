import { Router } from "express";
const router = Router();

// sub routes imports
import notification from "./Notification";

router.use("/notification", notification);

export default router;
