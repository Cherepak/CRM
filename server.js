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

app.get("/allmytask", (req,res)=> {
    let name = req.query.name;

    connection.query(`SELECT * FROM задачи WHERE кому = "${name}"`, (err, result) => {
        if(err) {
            console.log("Ошибка " + err)
            
        } else {
            res.send(result)
        }
    })
})

app.get("/mytask", (req,res)=> {
    let name = req.query.name;

    connection.query(`SELECT * FROM задачи WHERE кому = "${name}" AND статус = "false"`, (err, result) => {
        if(err) {
            console.log("Ошибка " + err)
            
        } else {
            res.send(result)
        }
    })
})


app.get("/donetask", (req,res)=> {
    let name = req.query.name;

    connection.query(`SELECT * FROM задачи WHERE кому = "${name}" AND статус = "true"`, (err, result) => {
        if(err) {
            console.log("Ошибка " + err)
            
        } else {
            res.send(result)
        }
    })
})


app.get("/addedtask", (req,res)=> {
    let name = req.query.name;

    connection.query(`SELECT * FROM задачи WHERE Поставил = "${name}"`, (err, result) => {
        if(err) {
            console.log("Ошибка " + err)
            
        } else {
            res.send(result)
        }
    })
})

app.get("/addtask", (req,res) => {//Добавить задачу

    let to = req.query.to;
    let task = req.query.task;
    let dateFinishExpandedString = req.query.date;
    let dateFinishExpanded = new Date(dateFinishExpandedString);
    let dateFinish = `${dateFinishExpanded.getFullYear()}-${dateFinishExpanded.getMonth()}-${dateFinishExpanded.getDay()} ${dateFinishExpanded.getHours()}:${dateFinishExpanded.getMinutes()}:${dateFinishExpanded.getSeconds()}`;
    let dateBeginExpanded = new Date();
    let dateBegin =  `${dateBeginExpanded.getFullYear()}-${dateBeginExpanded.getMonth()}-${dateBeginExpanded.getDay()} ${dateBeginExpanded.getHours()}:${dateBeginExpanded.getMinutes()}:${dateBeginExpanded.getSeconds()}`;
    let subject = req.query.subject;
    let from = req.query.from;
    let status = false;
    connection.query(`INSERT задачи (Поставил, Кому, Тема, Начало, Окончание, Задача, Статус) 
    VALUES ("${from}", "${to}", "${subject}", "${dateBegin}", "${dateFinish}", "${task}", "${status}")`, (err, result) => {
        if(err) {
            console.log(err)
            res.send({answer: false})
        } else {
            res.send({answer: true})
        }
    })
})

app.get("/changestatustask", (req,res) => {
    let id = req.query.id;
    let comment = req.query.comment;
    connection.query(`UPDATE задачи SET Статус = "true", Комментарий = "${comment}" WHERE id = "${id}"`,(err,result) => {
        if(err) {
            console.log(err)
            res.send({answer: false})
        } else {
            res.send({answer: true})
        }
    });
    

})

app.get("/organization", (req,res) => {
    connection.query(`SELECT * FROM организации`, (err, result) => {
        if(err) {
            console.log("Возникла ошибка" + err)
        } else {
            res.send(result)
        }
    })
})

app.get("/client",(req,res) => {
    connection.query(`SELECT * FROM клиенты`, (err, result) => {
        if(err) {
            console.log("Возникла ошибка" + err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3000);