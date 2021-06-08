import React from "react";
import ReactDOM from "react-dom";

import {Main} from "./present/main";



class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
          //___________________________состояние для презентационых страниц
          scope:true,//
          compani:false,// страница о компании
          login:false,// страница входа
          reg:false,//страница с регистрацией
          userName:"Черепаха Дмитрий Вадимович",//имя пользователя, должно подгружаться из сервера
          userStatus: "",//статус пользователя (user/admin) для возможностей
          statusReg: false,// статус регистрации
          sport:true,//
          sale: false,//
          skald:false,//
//_______________________________________
          status: true,//статус пользователя (зарегестрирован или нет)
//_____________________________состояния для главных страниц пользовательского интерфейса
          tableWork:false,//страница рабочий стол
          employee:false,//страница с пользователями
          task:false,//страница с задачами
          sklad:false,//Страница со складом
          clientele: true,//страница с клиентами
          massage:false,//страница с сообщениями 
          setting: false,//Страница с настройками
//_______________________________
          firma:'горн', // имя компании для сервера(временная фирма)
//_________________________________
          listUser: '',//хранилище со списком пользователей
//_____________________________состояние для интерфейса сотрудников
          addEmployee: true,// страница добавить пользователя
          listEmployeeState: false,//
          propfileEmployee:false,//
//________________________________состояние для интерфейса задач
          myTask: false,//
          addTask:false,//
          taskForMy:false,//
//______________________________состояние для интерфейса с клиентами
          ButtonClientAll:false,
            ClientAllFiz: false, 
            ClientAllCorp: false,

          buttonClicentMy:false,
            ClicentMyFiz: false,
            ClicentMyCorp: false,

          addClientele: false,

          openClientCard:false,
//____________________________________
          data:"",//сюда загружаются данные с сервера для их обработки на клиенте
//____________________________Состояние 
          
        }

        this.componentSportPage = this.componentSportPage.bind(this);
        this.componentSalePage = this.componentSalePage.bind(this);
        this.componentSkladPage = this.componentSkladPage.bind(this);

        this.componentScopePage = this.componentScopePage.bind(this);
        this.componentCompaniPage = this.componentCompaniPage.bind(this);
        this.componentLoginPage = this.componentLoginPage.bind(this);
        this.companentRegPage = this.companentRegPage.bind(this);
        this.componentSingLogin = this.componentSingLogin.bind(this);
        this.componentListEmployee = this.componentListEmployee.bind(this);
        this.componentAddEmployee = this.componentAddEmployee.bind(this);
        this.componentOpenProfile = this.componentOpenProfile.bind(this);
        this.componentAddProfile = this.componentAddProfile.bind(this);
        this.componentTransformProfile = this.componentTransformProfile.bind(this);
        this.componentDeleteProfile = this.componentDeleteProfile.bind(this);
        this.componentTableWork=this.componentTableWork.bind(this);
        this.componentEmployee=this.componentEmployee.bind(this);
        this.componentTask=this.componentTask.bind(this);
        this.componentSklad=this.componentSklad.bind(this);
        this.componentClientele=this.componentClientele.bind(this);
        this.componentMassage=this.componentMassage.bind(this);
        this.componentSetting=this.componentSetting.bind(this);
        this.componentMyTask = this.componentMyTask.bind(this);
        this.componentAddTask = this.componentAddTask.bind(this);
        this.componentTaskFromMy = this.componentTaskFromMy.bind(this);
        this.componentAddTaskToServer = this.componentAddTaskToServer.bind(this);
        this.componentReg = this.componentReg.bind(this);
        this.componentListClienteleOuer = this.componentListClienteleOuer.bind(this);
        this.componentMyClientele = this.componentMyClientele.bind(this);
        this.componentAddClientele = this.componentAddClientele.bind(this);
        this.componentAddClientToServer = this.componentAddClientToServer.bind(this);
        this.componentDownloadMyClientcorp = this.componentDownloadMyClientcorp.bind(this);
        this.componentDownloadMyClientfiz = this.componentDownloadMyClientfiz.bind(this);
        this.componentDownloadAllClientfiz = this.componentDownloadAllClientfiz.bind(this);
        this.componentDownloadAllClientcorp = this.componentDownloadAllClientcorp.bind(this);
        this.componentDownoladClientCard = this.componentDownoladClientCard.bind(this);
        this.componentAddCorrectClient = this.componentAddCorrectClient.bind(this);
    }
    render() {
        return (
            <div>
                <Main
                state={this.state}
                componentSportPage={this.componentSportPage}
                componentSalePage={this.componentSalePage}
                componentSkladPage={this.componentSkladPage}
                componentScopePage = {this.componentScopePage}
                componentCompaniPage = {this.componentCompaniPage}
                companentRegPage = {this.companentRegPage}
                componentLoginPage = {this.componentLoginPage}
                componentSingLogin = {this.componentSingLogin}
                componentReg = {this.componentReg}
                componentListEmployee={this.componentListEmployee}
                componentAddEmployee = {this.componentAddEmployee}
                componentOpenProfile = {this.componentOpenProfile}
                componentAddProfile = {this.componentAddProfile}
                componentTransformProfile = {this.componentTransformProfile}
                componentDeleteProfile = {this.componentDeleteProfile}
                componentTableWork={this.componentTableWork}
                componentEmployee={this.componentEmployee}
                componentTask={this.componentTask}
                componentSklad={this.componentSklad}
                componentClientele={this.componentClientele}
                componentMassage={this.componentMassage}
                componentSetting={this.componentSetting}
                componentMyTask = {this.componentMyTask}
                componentAddTask = {this.componentAddTask}
                componentTaskFromMy = {this.componentTaskFromMy}
                componentAddTaskToServer = {this.componentAddTaskToServer}
                componentListClienteleOuer = {this.componentListClienteleOuer}
                componentMyClientele = {this.componentMyClientele}
                componentAddClientele = {this.componentAddClientele}
                componentAddClientToServer = {this.componentAddClientToServer}
                componentDownloadMyClientfiz = {this.componentDownloadMyClientfiz}
                componentDownloadMyClientcorp = {this.componentDownloadMyClientcorp}
                componentDownloadAllClientfiz = {this.componentDownloadAllClientfiz}
                componentDownloadAllClientcorp = {this.componentDownloadAllClientcorp}
                componentDownoladClientCard = {this.componentDownoladClientCard}
                componentAddCorrectClient = {this.componentAddCorrectClient}
                noSubmit = {this.noSubmit}
                />
            </div>
        )
    }



    noSubmit(event) {
      event.preventDefault();
    }

    componentAddCorrectClient(id,menedger,namecorp,family,name,sourname,mail,phone,face,inn,ogrn,bank,kpp,okpo,raschSch,jurid,factid) {
      fetch(`/addcorrectclient?database=${this.state.firma}&menedger=${menedger}&id=${id}&namecorp=${namecorp}&family=${family}&name=${name}&sourname=${sourname}&mail=${mail}&phone=${phone}&face=${face}&inn=${inn}&ogrn=${ogrn}&bank=${bank}&kpp=${kpp}&okpo=${okpo}&raschSch=${raschSch}&jurid=${jurid}&factid=${factid}`)
      .then((response)=>{
        return response.json();
      })
      .then((data)=> {
        if(data["status"] == true){
          alert("Данные изменены")
        } else {
          alert("Что то пошло не так")
        }
      })
    }

    componentDownoladClientCard(id) {
      fetch(`/downoladClientCard?id=${id}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["status"] == true) {
          this.setState(state=> ({
            data: data["data"],
            ClicentMyFiz: false,
            ClicentMyCorp: false,
            ClientAllFiz: false, 
            ClientAllCorp: false,
            openClientCard:true,
            addClientele: false,  
          }))
        } else {alert("Что то пошло не так")}
      })
          
    }

    componentAddClientToServer(family,name,sourname,mail,phone,face,inn,ogrn,bank,kpp,okpo,raschSch,namecorp,factip,jurip ) {
      fetch(`/addclient?family=${family}&name=${name}&sourname=${sourname}&mail=${mail}&phone=${phone}&face=${face}&inn=${inn}&ogrn=${ogrn}&bank=${bank}&kpp=${kpp}&okpo=${okpo}&raschSch=${raschSch}&user=${this.state.userName}&database=${this.state.firma}&namecorp=${namecorp}&factip=${factip}&jurip=${jurip}`)
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        if(data["status"] == true) {
          alert("Данные добавлены")
        }
      })
    }

    
    componentDownloadMyClientfiz() {
      fetch(`/downloadmyclientfiz?user=${this.state.userName}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["status"] == true) {
          this.setState(state=> ({
            data: data["data"],
            ClicentMyFiz: true,
            ClicentMyCorp: false,
            ClientAllFiz: false, 
            ClientAllCorp: false,
            openClientCard:false,
            addClientele: false,

          }))
        } else {alert("Данных не найдено")}
      })
    }

    componentDownloadMyClientcorp() {
      fetch(`/downloadmyclientcorp?user=${this.state.userName}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["status"] == true) {
          this.setState(state=> ({
            data: data["data"],
            ClicentMyFiz: false,
            ClicentMyCorp: true,
            ClientAllFiz: false, 
            ClientAllCorp: false,
            openClientCard:false,
            addClientele: false,

          }))
        } else {
          alert("Данные не найдены")
        }
      })
    }

    componentDownloadAllClientfiz() {
      fetch(`/downloadallclientfiz?database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["status"] == true) {
          this.setState(state=> ({
            data: data["data"],
            ClicentMyFiz: false,
            ClicentMyCorp: false,
            ClientAllFiz: true, 
            ClientAllCorp: false,
            openClientCard:false,
            addClientele: false,

          }))
        } else {alert("Данных не найдено")}
      })
    }

    componentDownloadAllClientcorp() {
      fetch(`/downloadallclientcorp?database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["status"] == true) {
          this.setState(state=> ({
            data: data["data"],
            ClicentMyFiz: false,
            ClicentMyCorp: false,
            ClientAllFiz: false, 
            ClientAllCorp: true,
            openClientCard:false,
            addClientele: false,

          }))
        } else {alert("Данных не найдено")}
      })
    }

    componentListClienteleOuer() { //загрузить всех клиентов
      this.setState(state=> ({
        ButtonClientAll:true,
        buttonClicentMy:false,
      }))
    }

    componentMyClientele() {//загрузить клиентов пользователя
      this.setState(state => ({
        ButtonClientAll:false,
        buttonClicentMy:true,
      }))
    }
    componentAddClientele() {//Добавить клиента
      this.setState(state => ({
        addClientele: true,
        ClicentMyFiz: false,
        ClicentMyCorp: false,
        ClientAllFiz: false, 
        ClientAllCorp: false,
        openClientCard:false,
      }))
    }

    componentAddTaskToServer(today,subject,task,todate,to) { // добавить задачу на сервер
      fetch(`/addtask?today=${today}&subject=${subject}&task=${task}&todate=${todate}&to=${to}&from=${this.state.userName}&database=${this.state.firma}`)
      .then((result)=> {
        return result.json();
      })
      .then((data) => {
          if(data["status" == true]) {
            alert("Задача добавлена");
          }
      })
    }

    componentMyTask(){ //получить задачи пользователя
      fetch(`/gettask?database=${this.state.firma}&username=${this.state.userName}`)
      .then((results) => {
        return results.json();
      })
      .then((data)=> {
        if(data["status"] == true) {
          this.setState( state=> ({
            data: data["data"]
          }))
        }
        else {
          alert(alert(data["result"]));
        }
      })
      this.setState(state => ({
        myTask: true,
        addTask:false,
        taskForMy:false,
      }))
    }

    componentAddTask() { // Показать модуль с интерфесом "добавить задачу"
      fetch(`/getlistuser?database=${this.state.firma}`)
      .then((result)=> {
        return result.json();
      })
      .then((data)=>{
        this.setState(state => ({
          myTask: false,
          addTask:true,
          taskForMy:false,
          listUser: data,
        }))
      })
    }

    componentTaskFromMy() { //показать задачи от меня
      fetch(`/taskFromMy?database=${this.state.firma}&username=${this.state.userName}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["status"] == true) {
          this.setState(state => ({
            myTask: false,
            addTask:false,
            taskForMy:true,
            data: data["data"]
          }))
        } else {
          alert(data["results"]);
        }
      })
    }

    componentDeleteProfile (elem) { // удалить профиль сотрудника
      fetch(`/deleteprofile?profile=${elem}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data)=>{
        alert("Данные сотрудника удалены");
        this.setState(state=>({
          addEmployee: false,
          listEmployeeState: true,
          propfileEmployee: false,
        }))
      })
    }

    componentTransformProfile(elem,name,family,sourname,login,password,otdel,phone,mail,status,date){//изменить данные профиля сотрудника
      fetch(`/transformprofile?elem=${elem}&name=${name}&family=${family}&sourname=${sourname}&login=${login}&password=${password}&otdel=${otdel}&phone=${phone}&mail=${mail}&status=${status}&date=${date}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["statustransformProfile"]==true) {
          alert("Данные исправлены");
        }
      })
    }

    componentAddProfile(name,family,sourname,login,password,otdel,phone,mail,status,date) { //добавить профиль сотрудника
      fetch(`/addprofile?&name=${name}&family=${family}&sourname=${sourname}&login=${login}&password=${password}&otdel=${otdel}&phone=${phone}&mail=${mail}&status=${status}&date=${date}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if(data["statusAddProfile"] == true) {
         alert("Профиль добавлен");
        }
      })
    }

    componentAddEmployee () {
      this.setState(state => ({
        addEmployee: true,
        listEmployeeState: false,
        propfileEmployee: false,
      }))
    }

    componentListEmployee(firma) {
      fetch(`/listEmployee?firma=${firma}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(state=> ({
          data: data,
          addEmployee: false,
          listEmployeeState: true,
          propfileEmployee: false,
        }));
      })
    }

    componentOpenProfile(profile) {
      fetch(`/openprofile?profile=${profile}&database=${this.state.firma}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        this.setState(state => ({
          data: data,
          addEmployee: false,
          listEmployeeState: false,
          propfileEmployee: true,
        }))
      })
    }

    componentTableWork () {
      this.setState(state =>({
        tableWork:true,
        employee:false,
        task:false,
        sklad:false,
        clientele: false,
        massage:false,
        setting: false,
      }));
    }

    componentEmployee () {
      this.setState(state =>({
        tableWork:false,
        employee:true,
        task:false,
        sklad:false,
        clientele: false,
        massage:false,
        setting: false,
      }));
    }

    componentTask () {
      this.setState(state =>({
        tableWork:false,
        employee:false,
        task:true,
        sklad:false,
        clientele: false,
        massage:false,
        setting: false,
      }));
    }

    componentSklad () {
      this.setState(state =>({
        tableWork:false,
        employee:false,
        task:false,
        sklad:true,
        clientele: false,
        massage:false,
        setting: false,
      }));
    }

    componentClientele () {
      this.setState(state =>({
        tableWork:false,
        employee:false,
        task:false,
        sklad:false,
        clientele: true,
        massage:false,
        setting: false,
      }));
    }

    componentMassage () {
      this.setState(state =>({
        tableWork:false,
        employee:false,
        task:false,
        sklad:false,
        clientele: false,
        massage:true,
        setting: false,
      }));
    }

    componentSetting () {
      this.setState(state =>({
        tableWork:false,
        employee:false,
        task:false,
        sklad:false,
        clientele: false,
        massage:false,
        setting: true,
      }));
    }


    componentReg(
      reglogincompani,
      firstUserName,
      firstUserPhatherName,
      firstUserFamily,
      firstUserLogin,
      firstUserPassword,
      section,
      telEmployee,
      mailEmployee,
      birthdayEmployeeDayReg,
      birthdayEmployeeMonthReg,
      birthdayEmployeeYearReg) {
      fetch(`/reg?reglogincompani=${reglogincompani}&firstUserName=${firstUserName}&firstUserPhatherName=${firstUserPhatherName}&firstUserFamily=${firstUserFamily}&firstUserLogin=${firstUserLogin}&firstUserPassword=${firstUserPassword}&section=${section}&telEmployee=${telEmployee}&mailEmployee=${mailEmployee}&birthdayEmployeeDayReg=${birthdayEmployeeDayReg}&birthdayEmployeeMonthReg=${birthdayEmployeeMonthReg}&birthdayEmployeeYearReg=${birthdayEmployeeYearReg}`)
      .then((res)=> {
        return res.json();
      })
      .then((data)=>{
        this.setState(state => ({
          login: data["statusReg"],
          reg: false
        }))
      })
    }

    componentSingLogin (login, loginUser, password) {
      fetch(`/sing-up?login=${login}&loginUser=${loginUser}&password=${password}`)
      .then((res)=> {
        return res.json();
      })
      .then((data) => {
        this.setState(({
          userStatus: data['userStatus'],
          status:data["status"],
          user: data["user"],
          firma: data["firma"]
        }));
      })
    }
    componentLoginPage () {
      this.setState(state => ({
        scope:false,
        compani:false,
        login:true,
        reg:false,
      }));
    }

    companentRegPage() {
      this.setState(state => ({
        scope:false,
        compani:false,
        login:false,
        reg:true,
      }));
    }

    componentScopePage() {
      this.setState(state => ({
        scope:true,
        compani:false,
        login:false,
        reg:false,
      }));
    }

    componentCompaniPage() {
      this.setState(state => ({
        scope:false,
        compani:true,
        login:false,
        reg:false,
      }));
    }

    componentSportPage() {
      this.setState(state=> ({
        sport:true,
        sale:false,
        sklad:false,
      }));
    }

    componentSalePage () {
      this.setState(state=> ({
        sport:false,
        sale:true,
        sklad:false,
      }));
    }

    componentSkladPage() {
      this.setState(state=> ({
        sport:false,
        sale:false,
        sklad:true,
      }));
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root")
);
