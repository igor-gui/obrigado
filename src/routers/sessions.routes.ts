import { startSession } from "@/controllers/sessions.controller";
import { validateSchema } from "@/middlewares";
import { sessionSchema } from "@/schemas/session.schema";
import { Router } from "express";

const router = Router();

router.post('/login', validateSchema(sessionSchema), startSession);

export { router as sessionsRouter };