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

app.get("/allmytask", (req,res)=> {//показать все мои задачи
    let name = req.query.name;

    connection.query(`SELECT * FROM задачи WHERE кому = "${name}"`, (err, result) => {
        if(err) {
            console.log("Ошибка " + err)
            
        } else {
            res.send(result)
        }
    })
})

app.get("/mytask", (req,res)=> {//показать только текущие задачи
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

app.get("/changestatustask", (req,res) => {//изменить статус задачи
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

app.get("/organization", (req,res) => {//показать все организации
    connection.query(`SELECT * FROM организации`, (err, result) => {
        if(err) {
            console.log("Возникла ошибка" + err)
        } else {
            res.send(result)
        }
    })
})

app.get("/client",(req,res) => {//показать всех клиентов
    connection.query(`SELECT * FROM клиенты`, (err, result) => {
        if(err) {
            console.log("Возникла ошибка" + err)
        } else {
            res.send(result)
        }
    })
})

app.get("/addorganization", (req,res) => {//добавить организацию

    let name = req.query.name;
    let legaladress = req.query.legaladress;
    let factadress = req.query.factadress;
    let okpo = req.query.okpo;
    let okved = req.query.okved;
    let numberlabel = req.query.numberlabel;
    let ogrn = req.query.ogrn;
    let inn = req.query.inn;
    let kpp = req.query.kpp;
    let namebank = req.query.namebank;
    let rs = req.query.rs;
    let ks = req.query.ks;
    let bik = req.query.bik;
    let maindirector = req.query.maindirector;
    let menedger = req.query.menedger;
    let numbermenedger = req.query.numbermenedger;

    connection.query(`INSERT организации (Наименование, Юридическийадрес,Фактическийадрес,ОКПО,ОКВЭД,Телефонорганизации,ОГРН,ИНН,КПП,Наименованиебанка,РС,КС,БИК,Генеральныйдиректор,имяменеджера,телефонменеджера) 
    VALUES ("${name}","${legaladress}","${factadress}","${okpo}","${okved}","${numberlabel}","${ogrn}","${inn}","${kpp}","${namebank}","${rs}","${ks}","${bik}","${maindirector}","${menedger}","${numbermenedger}")`, (err,result) => {
        if(err) {
            res.send({response: false})
        } else {
            res.send({response: true})
        }
    })
})

app.get("/addfizface", (req,res) => {//добавить клиента

    let name = req.query.name; 
    let number = req.query.number; 
    let city = req.query.city; 
    let adress = req.query.adress; 
    let mail = req.query.mail; 

    connection.query(`INSERT клиенты (ФИО, телефон, город, адрес, почта) 
    VALUES ("${name}","${number}","${city}","${adress}","${mail}")`, (err,result) => {
        if(err) {
            res.send({response: false})
        } else {
            res.send({response: true})
        }
    })
})

app.get(`/moreaboutfizface`, (req,res) => {
    let id = req.query.id;
    connection.query(`SELECT * FROM клиенты WHERE id = "${id}"`, (err, results)=> {
        if(err){
            res.send({ошибка: err})
        }  else {
            res.send(results)
        } 
    })
})

app.get(`/moreaboutorganization`, (req,res) => {
    let id = req.query.id;
    connection.query(`SELECT * FROM организации WHERE id = "${id}"`, (err, results)=> {
        if(err){
            res.send({ошибка: err})
        }  else {
            res.send(results)
        } 
    })
})

app.get(`/redactfizface`,(req,res) => {
    let id = req.query.id;
    let name = req.query.name;
    let phone = req.query.phone;
    let mail = req.query.mail;
    let city = req.query.city;
    let adress = req.query.adress;
    let comment = req.query.comment;
    
    connection.query(`UPDATE клиенты SET ФИО="${name}", телефон="${phone}", город="${mail}", адрес="${city}", почта="${adress}", комментарии="${comment}" WHERE id = "${id}"`, (err,result) => {
        if(err) {
            console.log(err)
            res.send({response: err})
        } else {
            res.send({response: true})
        }
    })
})

app.get(`/redactorganization`,(req,res) => {
    let id = req.query.id;
    let name = req.query.name;
    let maindirector =req.query.maindirector;
    let legaladress = req.query.legaladress;
    let factadress = req.query.factadress;
    let phoneorganization = req.query.phoneorganization;
    let inn = req.query.inn;
    let kpp = req.query.kpp;
    let ks = req.query.ks;
    let ogrn = req.query.ogrn;
    let okved = req.query.okved;
    let okpo = req.query.okpo;
    let rs = req.query. rs;
    let bik = req.query.bik;
    let namebank = req.query.namebank;
    let namemenedger = req.query.namemenedger;
    let phonemanedger = req.query.phonemanedger;
    let comment = req.query.comment;

    connection.query(`UPDATE организации SET 
    Наименование = "${name}", 
    Юридическийадрес = "${legaladress}", 
    Фактическийадрес = "${factadress}" ,
    ОКПО = "${okpo}" ,
    ОКВЭД = "${okved}" ,
    Телефонорганизации = "${phoneorganization}" ,
    ОГРН = "${ogrn}" ,
    ИНН =" ${inn}" ,
    КПП = "${kpp}" ,
    Наименованиебанка = "${namebank}", 
    РС  = "${rs}",
    КС  = "${ks}",
    БИК  = "${bik}",
    Генеральныйдиректор  = "${maindirector}",
    имяменеджера  = "${namemenedger}",
    телефонменеджера  = "${phonemanedger}",
    Комментарии = "${comment}" WHERE id = "${id}"`, (err,result) => {
        if(err) {
            console.log(err)
            res.send({response: err})
        } else {
            res.send({response: true})
        }
    })

})

app.get("/loadmassage", (req,res)=> {
    let from = req.query.from;
    let to = req.query.to;

    connection.query(`SELECT сообщение, от FROM сообщения WHERE от="${from}" AND кому="${to}"`, (err, result) => {
        if(err) {
            res.send({response: false, data: result})
            console.log(err)
        } else {
            res.send({response: true, data: result})
            console.log(result)
        }
    })
})


app.listen(3000);