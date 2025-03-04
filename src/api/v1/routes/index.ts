import { Router } from "express";
import { getLoans, createLoan } from "../controllers/loanController";

const router = Router();

router.get("/", getLoans);
router.post("/", createLoan);

export default router;
