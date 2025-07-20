import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
const app = express();
const port=process.env.PORT||3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename );

//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    let siteName = "adidas";
    let searchText = "Search now";
    const arr= ['hello' , 'beta' , 'how are u']
    res.render('index' , {siteName:siteName , searchText:searchText , arr:arr});  
})


app.get('/blog/:slug',(req,res)=>{
    let blogTitle = "Adidas why and when"
    let blogContent = "This is a very good brand";
    res.render('blogpost' , {blogContent:blogContent , blogTitle:blogTitle});  
})
app.listen(port , ()=>{console.log('Server running on port 3000')})