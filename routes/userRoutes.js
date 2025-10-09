import express from "express"
import validate from "../middleware/validate.js";
import userController from "../controllers/userController.js";
import userValidation from "../validations/userValidation.js"

const router = express.Router();

router.post("/addUser", validate(userValidation.RegisterUser),userController.addUser);

export default router;