import * as userService from "../services/userService";
import { Request, Response } from "express";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const session = await userService.authenticateUser(email, password);
        
        if(session === null) return res.sendStatus(401);

        res.send(session).status(200);
        
    } catch(e){
        console.log(e);  
        res.sendStatus(500);
    }   
}