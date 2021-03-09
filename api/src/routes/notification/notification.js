import { Router } from "express";
const router = Router();

/*utils*/
const {smtpNotification,sesNotification,smsNotification,pushNotification} = require("../../../controllers/notificationController");
  
router.get("/smtp", (req, res) => smtpNotification(req, res));
router.get("/ses", (req, res) => sesNotification(req, res));
router.get("/sms", (req, res) => smsNotification(req, res));
router.get("/push", (req, res) => pushNotification(req, res));

export default router;
