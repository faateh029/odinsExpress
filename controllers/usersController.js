import userStorage from '../storage/userStorage.js';

export const usersListGet = (req,res)=>{
    res.render("index" , {title:"Users List" , 
                          users:userStorage.getUsers() 
                          }
)}

export const usersCreateGet = (req,res)=>{
    res.render("createUser" , {title:"Create User"})
}

export const usersCreatePost= (req,res)=>{
    const {firstName , lastName} = req.body;
    userStorage.addUser({firstName,lastName});
    res.redirect("/");
}