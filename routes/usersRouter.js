import {Router} from 'express'
import {usersCreateGet,usersListGet,usersCreatePost} from '../controllers/usersController.js';
export const userRouter= Router();
userRouter.get('/' , usersListGet);
userRouter.get('/create' , usersCreateGet);
userRouter.post('/create' , usersCreatePost)