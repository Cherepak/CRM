

export function actionTableWork () {
    return {
        type: "CHOICE__TABLE__WORK",
        TableWork  : true,
        Employee  : false,
        Task : false,
        Reports: false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Contract: false,
        Setting : false,
    }
}


export function actionClientle () {
    return {
        type: "CHOICE__CLIENTLE",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Reports: false,
        Sklad  : false,
        Clientele : true,
        Massage : false,
        Contract: false,
        Setting : false,
    }
}

export function actionEmployee (data) {

    return {
        type : "CHOICE__EMPLOYEE",
        listEmployee : data,
        TableWork  : false,
        Employee  : true,
        Task : false,
        Reports: false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Contract: false,
        Setting : false,
    }
}


export function actionMassage (data) {

    return {
        type: "CHOICE__MASSAGE",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Reports: false,
        Sklad  : false,
        Clientele : false,
        Massage : true,
        listEmployee : data,
        Contract: false,
        Setting : false,
    }
}


export function actionSetting () {
    return {
        type: "CHOICE__SETTING",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Reports: false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Contract: false,
        Setting : true,
    }
}

export function actionSklad () {
    return {
        type: "CHOICE__SKLAD",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Reports: false,
        Sklad  : true,
        Clientele : false,
        Massage : false,
        Contract: false,
        Setting : false,
    }
}

export function actionTask () {
    return {
        type: "CHOICE__TASK",
        TableWork  : false,
        Employee  : false,
        Task : true,
        Reports: false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Contract: false,
        Setting : false,
    }
}

export function actionReports() {
    return {
        type: "REPORTS",
        TableWork: false,
        Employee: false,
        Task: false,
        Reports: true,
        Sklad: false,
        Clientele: false,
        Massage: false,
        Contract: false,
        Setting: false,
    }
}

export function actionContract () {
    return {
        type: "REPORTS",
        TableWork: false,
        Employee: false,
        Task: false,
        Reports: false,
        Sklad: false,
        Clientele: false,
        Massage: false,
        Contract: true,
        Setting: false,
    }
}