import { createNewUser, getUsers } from "@/controllers/users.controllers";
import { validateSchema } from "@/middlewares";
import { userSchema } from "@/schemas";
import { Router } from "express";


const router = Router()
router.get('/users', getUsers);

router.post('/users', validateSchema(userSchema), createNewUser);

export { router as usersRouter }