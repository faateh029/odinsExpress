import userStorage from '../storage/userStorage.js';
import {body , validationResult} from 'express-validator';

export const validateUser = [
    body('firstName')
    .trim()
    .isAlpha().withMessage('First name should contain only alphabets')
    .isLength({min:1, max:10}).withMessage('First Name length should be between 1-10')
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
                          users:userStorage.getUsers() ,

                          }
)}


export const usersCreateGet = (req,res)=>{
    res.render("createUser" , {title:"Create User" , 
                               errors:req.flash('errors'),
                               oldData:req.flash('oldData')[0]||{}
    })
}
export const updateUserGet = (req,res)=>{
    const user = userStorage.getUser(req.params.id);
    res.render("updateUser" , { title:"Update User" , 
                                user:user,
                                errors: req.flash('errors') || [], // Add this line
        oldData: req.flash('oldData')[0] || {}, // Add this line
        success: req.flash('success')[0] // Add this line
    })
}
export const updateUserPost = [
    validateUser , 
    (req,res,next)=>{
        const err=validationResult(req);
    if(!err.isEmpty()){
          req.flash('errors' , err.array()),
          req.flash('oldData' , req.body); 
          return res.redirect(`/${req.params.id}/update`)
    }
       try {
        const {firstName,lastName} = req.body; 
        userStorage.updateUser(req.params.id , {firstName,lastName})
        req.flash('success' , 'User updated successfully')
        res.redirect('/')

       }catch(err){
             req.flash('error', error.message);
      res.redirect(`/users/${req.params.id}/update`);
       }
     }

]
export const usersCreatePost=[
    validateUser , 
    (req,res,next)=>{
        const err = validationResult(req) ; 
    if(!err.isEmpty()){
        req.flash('errors' , err.array()); //store error
        req.flash('oldData' , req.body) ; //store form input
        return res.redirect('/create') //redirecting back
    }
    next();
    },
      (req,res)=>{  
    const {firstName , lastName} = req.body;
    //console.log("Form data received:", {firstName, lastName});
    userStorage.addUser({firstName,lastName});
    req.flash('success' , 'User created successfully')
    res.redirect("/");
}
] 