import * as signUpService from "../services/signUpService";
import { userSchema } from "../schemas/userSchema";
import { Request, Response } from "express";
import { UserObject } from "../interfaces/interfaces";

export async function signUp(req: Request, res: Response) {
    try {
        const userObject: UserObject = await userSchema(req.body);
        
        const authenticate = await signUpService.authenticateSignUp(userObject)
        
        if (authenticate === null) return res.sendStatus(409);

        res.sendStatus(201);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}