import { prisma } from "@/config";
import { createUser } from "@/controllers/users.controllers";
import { Router } from "express";


const router = Router()
router.get('/users', async (_req, res) => res.send(await prisma.user.findMany()));
router.post('/users', createUser)
export { router as UsersRouter }