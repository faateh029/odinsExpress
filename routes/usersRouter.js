import {Router} from 'express'
import {usersCreateGet,usersListGet,usersCreatePost , updateUserGet , updateUserPost} from '../controllers/usersController.js';
export const userRouter= Router();
userRouter.get('/' , usersListGet);
userRouter.get('/create' , usersCreateGet);
userRouter.post('/create' , usersCreatePost);
userRouter.post('/:id/update' , updateUserPost);
userRouter.get('/:id/update' , updateUserGet);