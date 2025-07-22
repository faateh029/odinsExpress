import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import {fileURLToPath} from 'url';
import {  body,  validationResult } from 'express-validator';
import path from 'path';
import {userRouter} from './routes/usersRouter.js'
const app = express();
const port=process.env.PORT||3000;
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename );
app.use(express.json());
 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: false }));
app.use(flash());
app.use('/' , userRouter)
// app.post('/register' , body('name').notEmpty().withMessage('name is not correct') , 
//    body('email').isEmail().withMessage('Please enter a valid email') , 
//    body('age').optional().isInt({min:18, max:100}) , (req,res)=>{
//       console.log('Received:', req.body); 
//     const err = validationResult(req)
//     if(!err.isEmpty()){
//         return res.status(400).json({err:err.array()});
//     }
//     res.json('registration successfull');
//    }) 

//    app.post('/comment' , body('comment').notEmpty().withMessage('Empty comments are not allowed').isLength({max:200}).withMessage('max 200 characters are allowed').trim().escape(), (req,res)=>{
//     const err = validationResult(req);
//     if(!err.isEmpty()){
//         res.status(400).json({err:err.array})
//     }
//     res.status(200).json(req.body.comment);
//    })
 

//    app.post('/login' ,
//                          body('username')
//                          .notEmpty().withMessage('Username cannot be empty')
//                                          .isAlphanumeric().withMessage('Only letters and numbers are allowed')
//                                          .not().contains(' ').withMessage('No spaces allowed') 
//                                          ,

//                          body('password').notEmpty().withMessage('Password cannot be empty')
//                                          .isLength({min:6})  
//                                          .custom((value)=>{
//                                             const hasLetter = /[a-zA-z]/.test(value);
//                                             const hasNumber = /[0-9]/.test(value);
//                                             const hasSpecialChar = /[!@#$%^&*()_]/.test(value);
//                                             return hasLetter&&hasNumber&&hasSpecialChar ; 
//                                          }).withMessage('Password must contain letters, numbers, and special characters') ,
//                         (req,res)=>{
//                             const err = validationResult(req); 
//                             if(!err.isEmpty()){
//                                 return res.status(400).json({err:err.array()})
//                             }
//                             res.status(200).json({"username": req.body.username , "password":req.body.password})
//                         })


// app.post('/product',  
//                     body('name')
//                     .notEmpty().withMessage('This field is required')
//                     .isString().withMessage('Name should be a string')
//                     .trim()
//                     .escape()  
//                     ,
//                     body('price')
//                     .notEmpty().withMessage('There must be a price')
//                     .isFloat({gt:0}).withMessage('Price must be greater than zero')
//                     .toFloat()
//                     ,
//                     body('details.brand')
//                     .notEmpty().withMessage('Product must have a brand')
//                     .isString().withMessage('The brand name must be a text value')
//                     .custom(value=>{
//                             if(!/^[a-zA-Z0-9\s-]+$/.test(value)){
//                                 throw new Error('Brand can only contain letters, numbers, spaces and hyphens')
//                             }
//                             return true;
//                     }) 
//                     ,
//                     body('details.inStock')
//                     .optional().isBoolean().withMessage('Status must be true or false')
//                     .toBoolean()     
//                     ,
//                     (req,res)=>{
//                         const err = validationResult(req); 
//                         if(!err.isEmpty()){
//                             return res.status(400).json({err:err.array()})
//                         }
//                         res.status(200).json({"message":"Product added successfully"})
//                     }              
// )



// const publicPath = path.join(__dirname , 'public')
// app.use(express.static(publicPath));


// const links = [
//   { href: "/", text: "Home" },
//   { href: "/about", text: "About" },
// ];



// const users = ["Rose", "Cake", "Biff"];

// app.use((req,res,next)=>{
//     res.locals.username = "faateh Butt";
//     next();
// })


// app.get('/',(req,res)=>{
   
//     res.render('index' , {message: "EJS Rocks" , name: "Faateh", event: "Coding Bootcamp", date: "Monday" , links: links  , users:users});  
// })
// app.get('/about' , (req,res)=>{
//     res.render('about' , {links:links})
// })

app.listen(port , ()=>{console.log('Server running on port 3000')})