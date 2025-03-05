import { Request, Response, NextFunction } from "express";

const authorize = (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const user = res.locals.user; 

            if (!user || !roles.includes(user.role)) {
                res.status(403).json({ success: false, message: "Forbidden: Access Denied" });
                return; 
            }

            next(); 
        } catch (error) {
            next(error);
        }
    };
};

export default authorize;
