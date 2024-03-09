import { paymentsProcess } from "@/controllers/payments.controllers";
import { validateSchema } from "@/middlewares";
import { paymentSchema } from "@/schemas";
import { Router } from "express"

const router = Router();

router.post("/payments", validateSchema(paymentSchema), paymentsProcess);

export { router as paymentsRouter };