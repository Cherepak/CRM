const express = require("express");
let app = express();
app.use(express.static("public"));

let mysql = require("mysql2");

app.get(`/reg`,(req,res) => { // Форма регистрации
  let reglogincompani = req.query.reglogincompani;
  let firstUserName = req.query.firstUserName;
  let firstUserPhatherName = req.query.firstUserPhatherName;
  let firstUserFamily = req.query.firstUserFamily;
  let firstUserLogin = req.query.firstUserLogin;
  let firstUserPassword = req.query.firstUserPassword;
  let section = req.query.section;
  let telEmployee = req.query.telEmployee;
  let mailEmployee = req.query.mailEmployee;
  let date = req.query.date;
  const connectionListCompani = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: `listcompani`,
    password: "SoupMacTavish95"
  });

  connectionListCompani.query(`INSERT INTO listcompani (name) VALUES ("${reglogincompani}")`); //Добавили в базе данных в пунке name имя компании

  const connectionDataBase = mysql.createConnection ({ 
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SoupMacTavish95"
  });

  connectionDataBase.query(`CREATE DATABASE ${reglogincompani}`,()=>{//создали базу данных для компании которая зарегестрировалась
    const connectionTableOnDataBase = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      database: `${reglogincompani}`,
      password: "SoupMacTavish95"
    });

   //Устанавливаем в базу данных табицу с сотрудиками 
    connectionTableOnDataBase.query(`CREATE TABLE listlogin (
      id INT NOT NULL AUTO_INCREMENT,
      login TEXT(100) NULL,
      password TEXT(100) NULL,
      status VARCHAR(45) NULL,
      фамилия TEXT(100) NULL,
      отчество TEXT(100) NULL,
      имя TEXT(100) NULL,
      датарождения VARCHAR(45) NULL,
      телефон TEXT(100) NULL,
      почта TEXT(100) NULL,
      отдел TEXT(100) NULL,
      PRIMARY KEY (id))`);
   //Добавляем первого пользователя, он же администратор в кабинете фирмы
    connectionTableOnDataBase.query(`
    INSERT INTO listlogin
    (login,password,status,фамилия,отчество,имя,датарождения,телефон,почта,отдел )
    VALUES ("${firstUserLogin}",
    "${firstUserPassword}",
    "admin",
    "${firstUserFamily}",
    "${firstUserPhatherName}",
    "${firstUserName}",
    "${date}",
    "${telEmployee}",
    "${mailEmployee}",
    "${section}")`);


    connectionTableOnDataBase.query(`CREATE TABLE clientele (
      id int NOT NULL AUTO_INCREMENT,
      менеджер text,
      фамилия text,
      имя text,
      отчество text,
      почтаклиента varchar(45) DEFAULT NULL,
      телефонклиента varchar(45) DEFAULT NULL,
      лицо text,
      инн varchar(45) DEFAULT NULL,
      огрн varchar(45) DEFAULT NULL,
      банк text,
      кпп varchar(45) DEFAULT NULL,
      окпо varchar(45) DEFAULT NULL,
      расчетныйсчет varchar(45) DEFAULT NULL,
      название text,
      PRIMARY KEY (id)
    )`);
  
    connectionTableOnDataBase.query(`CREATE TABLE task (
      id int NOT NULL AUTO_INCREMENT,
      тема text,
      откого text,
      кому text,
      датаначала varchar(45) DEFAULT NULL,
      датаокончания varchar(45) DEFAULT NULL,
      статус varchar(45) DEFAULT NULL,
      задача varchar(45) DEFAULT NULL,
      PRIMARY KEY (id))`
    
    )
  });

  

  res.send({statusReg:true})

})


app.get("/sing-up", function(req, res) { // Форма входа на платформу

  let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "listcompani",
    password: "SoupMacTavish95"
  })

  connection.query(
    "SELECT * FROM listcompani",
    (err, results) => {
      for (let i = 0; i < results.length; i++) {
        if( results[i]["name"].toUpperCase() ==  req.query.login.toUpperCase()) {//Находим существование фирмы

          let connect = mysql.createConnection({//подключаемся к БД фирмы
            host: "localhost",
            port: 3306,
            user: "root",
            database: req.query.login,
            password: "SoupMacTavish95"
          });

          connect.query(`SELECT * FROM listlogin`,
          (err, results) => {

            for(let i = 0; i < results.length; i++) { //ищем пользователей и перебираем их
              if(results[i]["login"] == req.query.loginUser && results[i]["password"]==req.query.password) {//проверяем совпадаем логин пользователя с паролем
                
                res.send({
                  user:JSON.stringify(results[i]["фамилия"] + " " +results[i]["имя"] + " " +results[i]["отчество"]),
                  userStatus:JSON.stringify(results[i]["status"]),
                  status: true,
                  firma:req.query.login
              });

              } else {
                res.send({
                  status:false,
                  massage: "Такого пользователя не найдено"
                })
              }
            }
          })
        } else {
          res.send({
            massage: "Такой компании не существует"
          })
        }
      }
    }
  )
});



app.get(`/listEmployee`, (req,res) => { //Список сотрудников в фирме
  const firma = req.query.firma;
  const connetcion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: firma,
    password: "SoupMacTavish95"
  })



  connetcion.query(`SELECT * FROM listlogin`, (err, results) => {
    let data ={};
    for (let i = 0; i < results.length; i++) {
      data[results[i]["id"]] = results[i];
    }
    res.send(data);
  })



})

app.get('/openprofile', (req,res) => { //Открыть профиль
  const profile = req.query.profile;
  const database = req.query.database;

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  });

  connection.query(`SELECT * FROM listlogin WHERE id = ${profile}`, (err,results)=>{
    const data = {};

    for (let i = 0; i < results.length; i++) {
      data[results[i]["id"]] = results[i];
    }

    res.send(data);
  });

});

app.get(`/addprofile`, (req,res) => { // Добавление профиля сотрудника
  const name = req.query.name;
  const family = req.query.family;
  const sourname = req.query.sourname;
  const login = req.query.login;
  const password = req.query.password;
  const otdel = req.query.otdel;
  const phone = req.query.phone;
  const mail = req.query.mail;
  const status = req.query.status;
  const date = req.query.date;

  const database = req.query.database;


  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  });

  connection.query(`INSERT INTO listlogin(login,password,status,фамилия,отчество,имя,датарождения,телефон,почта,отдел ) VALUES("${login}","${password}","${status}","${family}","${sourname}","${name}","${date}","${phone}","${mail}","${otdel}");`, (err, results) => {
    console.log(err);
    res.send({
      statusAddProfile:true
    });
  });

});


app.get(`/transformprofile`, (req,res) => { //Изменение информации в профиле сотрудника
  const elem = req.query.elem;
  const name = req.query.name;
  const family = req.query.family;
  const sourname = req.query.sourname;
  const login = req.query.login;
  const password = req.query.password;
  const otdel = req.query.otdel;
  const phone = req.query.phone;
  const mail = req.query.mail;
  const status = req.query.status;
  const date = req.query.date;
  const database = req.query.database;

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  });
  connection.query(
    `UPDATE listlogin SET login="${login}",password="${password}",status="${status}",фамилия="${family}",отчество="${sourname}",имя="${name}",датарождения="${date}",телефон="${phone}",почта="${mail}",отдел="${otdel}" WHERE id = ${elem};`,
    (err, results)=> {
    console.log(err);
    res.send({
      statustransformProfile:true
    });
  });

});


app.get(`/deleteprofile`, (req,res) => { // удаление профиля
  const profile = req.query.profile;
  const database = req.query.database;

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  });

  connection.query(`DELETE FROM listlogin WHERE id = ${profile}`, (err, results) => {
    console.log(err);
  })

});


app.get(`/getlistuser`, (req,res) => { // загрузка из базы данных списка сотрудников для модуля addTask
  const database = req.query.database;

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  })

  connection.query(`SELECT * FROM listlogin`, (err,results) => {
    let data = {};

    for(let i=0; i < results.length; i++){
      data[results[i]["id"]] = results[i];
    }
    res.send(data);
  });


});

app.get(`/addtask`, (req,res) => {//добавление задачи в базу данных
  const today = req.query.today;
  const subject = req.query.subject;
  const task = req.query.task;
  const todate = req.query.todate;
  const to = req.query.to;
  const from = req.query.from;
  const database = req.query.database;


  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  });

  connection.query(`INSERT INTO task(тема, откого, кому, датаначала, датаокончания, статус, задача) VALUES ("${subject}","${from}","${to}","${today}","${todate}","true","${task}")`, (err,results)=> {

    res.send({status: true});
  })
})


app.get(`/gettask`, (req,res) => { // показать задачи пользователя
  const database = req.query.database;
  const username = req.query.username;

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  })

  connection.query(`SELECT * FROM task WHERE кому = '${username}'`, (err, results) => {
    let data = {};


    if(results !== undefined) {
      for(let i=0; i < results.length; i++){
        data[results[i]["id"]] = results[i];
      }

      res.send({
        data: data,
        status: true
      });
    } else {
      res.send({
        result:"Задач не обнаружено",
        status:false
    })
    }

  })
})


app.get(`/taskFromMy`, (req,res) => {
  const database = req.query.database;
  const username = req.query.username;

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  })

  connection.query(`SELECT * FROM task WHERE откого = '${username}'`, (err,results) => {
    let data = {};

    if(results !== undefined) {
      for(let i=0; i < results.length; i++){
        data[results[i]["id"]] = results[i];
      }

      res.send({
        status: true,
        data: data,
      });
    } else {
      res.send({
        status: false,
        results: "Задач не обнаружено"
      });
    }
  });
});


app.get("/addclient", (req,res) => { //список клиентов физ лица
  const family = req.query.family;
  const name  = req.query.name;
  const sourname  = req.query.sourname;
  const mail  = req.query.mail;
  const phone  = req.query.phone;
  const face  = req.query.face;
  const inn  = req.query.inn;
  const ogrn  = req.query.ogrn;
  const bank  = req.query.bank;
  const kpp  = req.query.kpp;
  const okpo  = req.query.okpo;
  const raschSch  = req.query.raschSch;
  const user  = req.query.user;
  const database = req.query.database;
  const namecorp = req.query.namecorp;

  const connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  })

  connect.query(`INSERT INTO clientele (менеджер, фамилия, имя, отчество, почтаклиента, телефонклиента, лицо, инн, огрн, банк, кпп, окпо, расчетныйсчет, название) VALUES ("${user}","${family}","${name}","${sourname}","${mail}","${phone}","${face}","${inn}", "${ogrn}", "${bank}","${kpp}","${okpo}","${raschSch}","${namecorp}")`, (err, results) => {
    res.send({status:true})
  })
}) 


app.get("/downloadmyclientfiz", (req,res) => {
  const user  = req.query.user;
  const database = req.query.database;

  const connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  })

  connect.query(`SELECT * FROM clientele WHERE менеджер = '${user}' AND лицо = 'физическое'`, (err, results)=> {
    
    if(err == null && results.length !==0) {
      let data = {};

      for(let i = 0; i < results.length; i++) {
        data[results[i]["id"]] = results[i]
      }
  
      res.send({data:data, status:true})
    } else if (results.length == 0) {
      res.send({status:false})

    } else {
      res.send({status: false})
    }

    
  })
})

app.get("/downloadmyclientcorp", (req,res) => {
  const user  = req.query.user;
  const database = req.query.database;

  const connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: database,
    password: "SoupMacTavish95"
  })

  connect.query(`SELECT * FROM clientele WHERE менеджер = '${user}' AND лицо = 'юридическое'`, (err, results)=> {
    console.log(results.length)
    if(err == null && results.length !==0) {

      let data = {};

      for(let i = 0; i < results.length; i++) {
        data[results[i]["id"]] = results[i]
      }
  
      res.send({data:data, status:true})
    } else if (results.length == 0) {
      res.send({status:false})

    } else {
      res.send({status: false})
    }

    
  })

})

app.listen(3000);
