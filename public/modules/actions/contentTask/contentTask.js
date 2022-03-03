export function myTask () {
    return {
        type: "MY__TASK",
        added:false,
        allTask:false,
        myTask: true,
        addTask: false,
    }
}

export function addTask () {
    return {
        type: "ADD__TASK",
        added:false,
        allTask:false,
        myTask: false,
        addTask: true,
    }
}

export function allTask () {
    return {
        type: "ALL__TASK",
        added:false,
        allTask:true,
        myTask: false,
        addTask: false,
    }
}


export function addedTask () {
    return {
        type: "ADDED__TASK",
        added:true,
        allTask:false,
        myTask: false,
        addTask: false,
    }
}