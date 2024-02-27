import { prisma } from "@/config";
import { createNewUser } from "@/controllers/users.controllers";
import { Router } from "express";


const router = Router()
router.get('/users', async (_req, res) => {
    try {
        const users = await prisma.user.findMany()
        console.log(users)
        return res.send(users)
    } catch (error) {
        res.send(error.message)
    }
});

router.post('/users', createNewUser)

export { router as usersRouter }