

export function actionTableWork () {
    return {
        type: "CHOICE__TABLE__WORK",
        TableWork  : true,
        Employee  : false,
        Task : false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Setting : false,
    }
}


export function actionClientle () {
    return {
        type: "CHOICE__CLIENTLE",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Sklad  : false,
        Clientele : true,
        Massage : false,
        Setting : false,
    }
}

export function actionEmployee () {
    return {
        type: "CHOICE__EMPLOYEE",
        TableWork  : false,
        Employee  : true,
        Task : false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Setting : false,
    }
}


export function actionMassage () {
    return {
        type: "CHOICE__MASSAGE",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Sklad  : false,
        Clientele : false,
        Massage : true,
        Setting : false,
    }
}


export function actionSetting () {
    return {
        type: "CHOICE__SETTING",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Setting : true,
    }
}

export function actionSklad () {
    return {
        type: "CHOICE__SKLAD",
        TableWork  : false,
        Employee  : false,
        Task : false,
        Sklad  : true,
        Clientele : false,
        Massage : false,
        Setting : false,
    }
}

export function actionTask () {
    return {
        type: "CHOICE__TASK",
        TableWork  : false,
        Employee  : false,
        Task : true,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Setting : false,
    }
}
