const express = require("express");

let app = express();
app.use(express.static("public"));
let mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "SoupMacTavish95"
})

app.get("/listEmployee", (req,res) => {
    
    connection.query("SELECT * FROM работники",(err, result) => {
        if(err) {
            console.log("Ошибка " + err)
        } else {
            res.send(result)
        }
    })

});

app.get("/addrpofile", (req,res) => {// необходимо добавить проверку на наличие сотрудников 

    let sourName = req.query.фамилия;
    let name = req.query.имя;
    let secondName = req.query.отчество;
    let birthday = req.query.датарождения;
    let mail = req.query.почта;
    let tel  = req.query.номер;
    let status  = req.query.статус;
    let structure = req.query.отдел;

    connection.query(`INSERT работники (ФИО, Датарождения, Отдел, Номер, Почта, Статус) VALUES ("${sourName + " " + name + " " + secondName}" , "${birthday}", "${structure}", ${tel}, "${mail}", "${status}")`, (err, result) => {
        if(err) {
            console.log("Ошибка " + err)
            res.send({status:false})
        } else {
            res.send({status: true})
        }
    })
})

app.listen(3000);