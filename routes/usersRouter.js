import {Router} from 'express'
import {usersCreateGet,usersListGet,usersCreatePost , updateUserGet , updateUserPost, userDelete} from '../controllers/usersController.js';
export const userRouter= Router();
userRouter.get('/' , usersListGet);
userRouter.get('/create' , usersCreateGet);
userRouter.post('/create' , usersCreatePost);
userRouter.post('/:id/update' , updateUserPost);
userRouter.get('/:id/update' , updateUserGet);
userRouter.post('/:id/delete' , userDelete)