import express from "express"

import auth from "../middleware/auth.js";
import leaveController from "../controllers/leaveController.js";
import authorize from "../middleware/authorize.js";
import LeaveValidationSchema from "../validations/leaveValidation.js";
import validate from "../middleware/validate.js"

const router = express.Router();

router.use(auth);

//employee

router.post("/apply",validate(LeaveValidationSchema.LeaveValidation),authorize("employee"),leaveController.applyLeave);

router.get("/myLeaves", authorize("employee"),leaveController.getMyLeaves);

//manager

router.get("/myTeamLeaves",authorize("manager"),leaveController.getTeamLeaves);

router.patch("/update/:id",validate(LeaveValidationSchema.updateLeave),authorize("admin","manager"),leaveController.updateLeaves);



// admin

router.get("/stats",authorize("admin"),leaveController.leaveStatus);





export default router;