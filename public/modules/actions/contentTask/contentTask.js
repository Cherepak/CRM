export function myTask (data) {//открыть задачу
    return {
        type: "MY__TASK",
        dataMyTask: data,
        added:false,
        allTask:true,
        myTask: true,
        doneTask: false,
        addTask: false,
        report: false
    }
}

export function doneTask(data) {//показать выполненные задачи
    return {
        type: "DONE__TASK",
        dataMyTask: data,
        added:false,
        allTask:true,
        myTask: false,
        doneTask: true,
        addTask: false,
        report: false
    }
}

export function addTask (data) {//добавить задачу
    return {
        listAmployee: data,
        type: "ADD__TASK",
        added:false,
        allTask:false,
        myTask: false,
        doneTask: false,
        addTask: true,
        report: false
    }
}

export function allTask (data) {//показать задачи все
    return {
        type: "ALL__TASK",
        dataMyTask: data,
        added:false,
        allTask:true,
        myTask: false,
        doneTask: false,
        addTask: false,
        report: false
    }
}


export function addedTask (data) {//созданные мной задачи
    return {
        type: "ADDED__TASK",
        addedTask: data,
        added:true,
        allTask:false,
        myTask: false,
        doneTask: false,
        addTask: false,
        report: false
    }
}

export function report (id) {//Отчет
    return {
        type: "REPORT",
        added:false,
        allTask:false,
        myTask: false,
        doneTask: false,
        addTask: false,
        report: true,
        reportId: id
    }
}

