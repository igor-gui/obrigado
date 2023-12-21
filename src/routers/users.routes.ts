import { prisma } from "@/config";
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
 })
export {router as UsersRouter}