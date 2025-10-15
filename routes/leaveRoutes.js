import express from "express"

import auth from "../middleware/auth.js";
import leaveController from "../controllers/leaveController.js";
import authorize from "../middleware/authorize.js";
import LeaveValidation from "../validations/leaveValidation.js";
import validate from "../middleware/validate.js"

const router = express.Router();

router.use(auth);

//employee

router.post("/apply",validate(LeaveValidation),authorize("employee"),leaveController.applyLeave);

router.get("/myLeaves", authorize("employee"),leaveController.getMyLeaves);

//manager

router.get("/myTeamLeaves",authorize("manager"),leaveController.getTeamLeaves);





export default router;