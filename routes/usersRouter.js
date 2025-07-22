import {Router} from 'express'
import {userController} from '../controllers/usersController.js';
export const userRouter= Router();
userRouter.get('/' , userController.userListGet);
userRouter.get('/create' , userController.userCreateGet);
userRouter.post('/create' , userController.userCreatePost)