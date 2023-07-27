import * as signUpController from "../controllers/signUpController";
import { Router } from 'express';

const router = Router ();

router.post('/sign-up', signUpController.signUp); 

export default router;