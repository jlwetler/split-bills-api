import bcrypt from 'bcrypt';
import { UserObject } from '../interfaces/interfaces';
import * as userRepository from '../repositories/userRepository';
import { UserObjectHash } from '../interfaces/interfaces';

export async function authenticateSignUp(userObject: UserObject) {
    const { name, email, password } = userObject;
    
    const hashPassword = bcrypt.hashSync(password, 12);

    const check = await userRepository.emailCheck(email);
    
    if (check === null) return null;

    const userObjectHash : UserObjectHash = {
        name,
        email,
        hashPassword
    }

   await userRepository.insertUserData(userObjectHash);

   return userObjectHash;
}