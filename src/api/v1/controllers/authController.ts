import { Request, Response, NextFunction } from "express";
import { auth } from "../../../config/firebaseConfig"; 

// Retrieve user details
export const getUserDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userId = req.params.id;
        const user = await auth.getUser(userId);
        res.json({ uid: user.uid, email: user.email });
    } catch (error) {
        next(error);
    }
};

// Assign roles to users
export const setUserRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { userId, role } = req.body;
        await auth.setCustomUserClaims(userId, { role });
        res.json({ message: `Role ${role} assigned to user ${userId}` });
    } catch (error) {
        next(error);
    }
};
