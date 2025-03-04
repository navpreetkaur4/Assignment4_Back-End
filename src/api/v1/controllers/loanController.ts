import { Request, Response } from "express";

export const getLoans = (req: Request, res: Response) => {
    res.json({ message: "List of high-risk loans" });
};

export const createLoan = (req: Request, res: Response) => {
    res.json({ message: "Loan application submitted" });
};
