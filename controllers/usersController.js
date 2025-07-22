import userStorage from '../storage/userStorage.js';
import {body , validationResult} from 'express-validator';

const validateUser = [
    body('firstName')
    .trim()
    .isAlpha().withMessage('First name should contain only alphabets')
    .isLength({min:1, max:10}).withMessage('Last name length should be between 1-10')
    ,
    body('lastName')
    .trim()
    .isAlpha().withMessage(' Last name should contain only alphabets')
    .isLength({min:1, max:10}).withMessage('Last name length should be between 1-10')
]
export const usersListGet = (req,res)=>{
       const users = userStorage.getUsers();
    console.log("Getting users for display:", users);
    res.render("index" , {title:"Users List" , 
                          users:userStorage.getUsers() 
                          }
)}


export const usersCreateGet = (req,res)=>{
    res.render("createUser" , {title:"Create User"})
}

export const usersCreatePost=[
    validateUser , 
    (req,res)=>{
        const err = validationResult(req) ; 
    if(!err.isEmpty()){
        return res.status(400).json({err:err.array()})
    }
    },
      (req,res)=>{  
    const {firstName , lastName} = req.body;
    //console.log("Form data received:", {firstName, lastName});
    userStorage.addUser({firstName,lastName});
    //console.log({firstName , lastName})
    //console.log('user Added successfully ')
    res.redirect("/");
}
] 