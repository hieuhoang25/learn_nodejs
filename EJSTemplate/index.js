const express = require('express');
const app = express();
const port = 3000;
//form
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}))
//--
//khai bao upload file
var formidable = require('formidable');
var fs = require('fs');
const path = require('node:path/win32');
//--
app.set('view engine',"ejs");
app.set("views","./views")

app.get("/",(req,res) => {
    res.render('home')
})
app.get("/chao", (req,res) => {
    res.render("chao",{title:"Anh",name:"Teo"})
})
app.get("/time", (req,res) => {
    res.render("time",{day:"Thứ Hai"})
})
app.get("/sp", (req,res) => {
    var sp  = [{name:'HTC M9', price:60000},{name:'Samsung S8', price:75000}]
    res.render("sp",{sp:sp}) // forward to template
})
/**
 * Cách 1 là các giá trị truyền trực tiếp trong thành phần của url,
 *  https://localhost:3000/search/abc/3
 */
app.get("/search/:keyword/:page",(req,res)=>{
    let str = `keyword = ${req.params.keyword}<br>`;
    str+= `page=${req.params.page}<br>`;
    res.send(str);
})
/**
 * Cách 2: là các giá trị truyền đến như tham số , mỗi giá trị có tên. 
 * http://localhost:3000/cat?idcat=10&page=3
 */
app.get('/cat',  (req, res)=>{
    str = `idcat = ${req.query.idcat}`;
    str+=`page = ${req.query.page}`;
    res.send(str);
})
//form
app.get('/addEmail',  (req, res)=>{
    res.render("form");
})
app.post('/addEmail', (req, res)=>{
    let email = req.body.email; //body duoc khai bao tren
    res.send(email);
})
//upload hinh trong form
app.get('/addnewprod',  (req, res)=>{
    res.render("upload")
})
app.post('/addnewprod', (req, res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        let name = fields.productName; //
        let tmpPath = files.productImage.filepath;     
        let tenFile = files.productImage.originalFilename;
        let destPath =  __dirname +'\\public\\images\\' + tenFile; 
        fs.rename(tmpPath,destPath, (err)=>{
            //copy file
            if (err) throw err;
            res.end('File  uploaded');
        });
        //res.end(JSON.stringify({ fields, files }, null, 2));
         res.send("Name=" + name);
    });
})
app.get("/delete", (req, res)=>{
    pathfile = "/images/t3.PNG"
    fs.unlink(pathfile, (err)=>{
        if (err) throw err;
        console.log("File deleted!")
        res.send("File đã xóa")
    })
})
app.listen(port, ()=>{ console.log(`Project dang chay o port ${port}`)})