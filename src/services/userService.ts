import * as sessionRepository from "../repositories/sessionRepository";
import * as userRepository from "../repositories/userRepository";
//import * as tokenRepository from "../repositories/tokenRepository.js";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

export async function authenticateUser(email: string, password:string) {
    const user = await userRepository.findUser(email);
    
    if(user && bcrypt.compareSync(password, user.password)) {
        const id = user.id;
        const token = uuid();
        
        const session = await sessionRepository.createSession(id, token);
        
        return session;
    } else {
        return null;
    }
}