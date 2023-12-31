import { Request, Response, NextFunction } from "express";

export function validateUserAndPassword (req : Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if(!email || !password) return res.status(400);

    next();
}