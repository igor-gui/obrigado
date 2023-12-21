import { paymentsProcess } from "@/controllers/payments.controllers";
import { Router } from "express"

const router = Router();

router.post("/payments", paymentsProcess);

export { router as paymentsRouter };