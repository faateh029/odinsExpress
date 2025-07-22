import userStorage from '../storage/userStorage';

const usersListGet = (req,res)=>{
    res.render("index" , {title:"Users List" , 
                          users:userStorage.getUsers() 
                          }
)}

const usersCreateGet = (req,res)=>{
    res.render("createUser" , {title:"Create User"})
}

const usersCreatePost= (req,res)=>{
    const {firstName , lastName} = req.body;
    userStorage.addUser({firstName,lastName});
    res.redirect("/");
}