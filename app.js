import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
const app = express();
const port=process.env.PORT||3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename );

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const publicPath = path.join(__dirname , 'public')
app.use(express.static(publicPath));


const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

app.use((req,res,next)=>{
    res.locals.username = "faateh Butt";
    next();
})


app.get('/',(req,res)=>{
   
    res.render('index' , {message: "EJS Rocks" , name: "Faateh", event: "Coding Bootcamp", date: "Monday" , links: links  , users:users});  
})
app.get('/about' , (req,res)=>{
    res.render('about' , {links:links})
})

app.listen(port , ()=>{console.log('Server running on port 3000')})