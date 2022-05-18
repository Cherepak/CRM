export function myTask (data) {
    return {
        type: "MY__TASK",
        dataMyTask: data,
        added:false,
        allTask:false,
        myTask: true,
        addTask: false,
    }
}

export function addTask (data) {
    return {
        listAmployee: data,
        type: "ADD__TASK",
        added:false,
        allTask:false,
        myTask: false,
        addTask: true,
    }
}

export function allTask (data) {
    return {
        type: "ALL__TASK",
        dataAllMyTask: data,
        added:false,
        allTask:true,
        myTask: false,
        addTask: false,
    }
}


export function addedTask (data) {
    return {
        type: "ADDED__TASK",
        addedTask: data,
        added:true,
        allTask:false,
        myTask: false,
        addTask: false,
    }
}