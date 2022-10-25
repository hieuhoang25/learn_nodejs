const exp = require('express')
const app = exp();
const port = 3000;
var mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc@123456789',
    database : 'test'
})
//connect va tao
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
    //
    
  });

// app.get("/tablecreate", () =>{
//     var sql = `CREATE TABLE books (
//             id INT(11) AUTO_INCREMENT PRIMARY KEY,
//             title VARCHAR(255), 
//             slug VARCHAR(255),
//             price float, 
//             description VARCHAR(4000),
//             imageURL VARCHAR(255),
//             showhide BOOLEAN,
//             idCat INT(11)
//         )`;
//     db.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });
app.get("/books",() =>{
    var sql = "SELECT * FROM book";
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.log(result);
    })
})
app.get("/customers",(req,res) =>{
    var sql = "SELECT * FROM customers";
    db.query(sql, (err, result) =>{
        if (err) throw err;
        res.send(result);
    })
})
app.get("/insert",()=>{
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.log(result);
    })
})
app.listen(port, ()=>{
    console.log(`Ung dụng đang chạy với port ${port}`);
})