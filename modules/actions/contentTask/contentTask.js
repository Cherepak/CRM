export function myTask () {
    return {
        type: "MY__TASK",
        allTask:false,
        myTask: true,
        addTask: false,
    }
}

export function addTask () {
    return {
        type: "ADD__TASK",
        allTask:false,
        myTask: false,
        addTask: true,
    }
}

export function allTask () {
    return {
        type: "ALL__TASK",
        allTask:true,
        myTask: false,
        addTask: false,
    }
}