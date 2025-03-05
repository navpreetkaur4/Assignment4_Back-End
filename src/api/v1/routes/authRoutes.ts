import { Router, Request, Response, NextFunction } from "express";
import { getUserDetails, setUserRole } from "../controllers/authController";
import authenticate from "../middleware/authenticate";
import authorize from "../middleware/authorize";

const router = Router();

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

router.get("/:id", authenticate, asyncHandler(async (req, res, next) => {
    await getUserDetails(req, res, next);
}));

router.post("/set-role", authenticate, authorize(["admin"]), asyncHandler(async (req, res, next) => {
    await setUserRole(req, res, next);
}));

export default router;
