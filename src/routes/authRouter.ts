import * as userController from "../controllers/userController";
import * as signUpController from "../controllers/signUpController";
import { validateUserAndPassword } from "../middlewares/validadeUserAndPassword"
import { Router } from 'express';

const router = Router ();

router.post('/login', validateUserAndPassword, userController.login); 

router.post('/sign-up', signUpController.signUp); 

export default router;