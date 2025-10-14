import Joi from "joi"

const LeaveValidation = Joi.object({
    startDate:Joi.date().greater("now").required().messages({
        "date.base":"stardate must be valid date",
        "date.greater":"start date  must be future date"
    }),

    endDate:Joi.date().greater(ref("startDate")).required().messages({
        "date.base": "end date must be valid date",
        "date.greater": "end date must be after start date",

    }),

    leaveTypes:Joi.string().valid("sick","casual","privilage").required().messages({
        "string.empty":"leave types required",
        "any.only":"leave types must be sick or casual or privilege leave"
    }),

    reason:Joi.string().min(2).max(500).required().messages({
        "string.empty":"reason is required",
        "string.min":"reason must be at least 2 character",
        "string.max":"reason character can't exceed more than 500 character",
    }),

})

export default LeaveValidation;