
import {initialState} from "../../app.js"

export function reducer (state = initialState, action) {
    
switch (action.type) {
    case "CHOICE__TABLE__WORK":
        return {...state, 
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }
    case "CHOICE__CLIENTLE":
        return {...state,
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }
    case "CHOICE__EMPLOYEE":
        return {...state,
            listEmployee : action.listEmployee,
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }
    case "CHOICE__MASSAGE":
        return {...state,
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }
    case "CHOICE__SETTING":
        return {...state,
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }  
    case "CHOICE__SKLAD":
        return {...state,
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }  
    case "CHOICE__TASK":
        return {...state,
            TableWork  : action.TableWork ,
            Employee  : action.Employee ,
            Task : action.Task ,
            Sklad  : action.Sklad ,
            Clientele : action.Clientele ,
            Massage : action.Massage ,
            Setting : action.Setting ,
        }    
    case "MY__TASK":
    return {...state,
        dataMyTask:action.dataMyTask,
        added: action.added,
        allTask: action.allTask,
        myTask: action.myTask ,
        addTask: action.addTask ,
    }
    case "ADD__TASK":
    return {...state,
        listAmployee: action.listAmployee,
        added: action.added,
        allTask: action.allTask,
        myTask: action.myTask ,
        addTask: action.addTask ,
    }
    case "ALL__TASK":
    return {...state,
        added: action.added,
        dataAllMyTask: action.dataAllMyTask,
        allTask: action.allTask,
        myTask: action.myTask ,
        addTask: action.addTask ,
    }
    case "ADDED__TASK":
    return {...state,
        addedTask: action.addedTask,
        added: action.added,
        allTask: action.allTask,
        myTask: action.myTask ,
        addTask: action.addTask ,
    }
    case "OPEN__PROFILE":
        return {...state,
            addEmployee: action.addEmployee,
            profile: action.profile,
            profileRedact: action.profileRedact,
            id: action.id,
        }   
        case "CLOSE__PROFILE":
        return {...state,
            addEmployee: action.addEmployee,
            profile: action.profile,
            profileRedact: action.profileRedact
        }   
        case "PROFILE__REDACT":
        return {...state,
            addEmployee: action.addEmployee,
            profile: action.profile,
            profileRedact: action.profileRedact
        }   
        case "CLOSE__REDACTPROFILE":
        return {...state,
            addEmployee: action.addEmployee,
            profile: action.profile,
            profileRedact: action.profileRedact,
            id: action.id,
        }  
        case "ADD__EMPLOYEE":
        return {...state,
            addEmployee: action.addEmployee,
            profile: action.profile,
            profileRedact: action.profileRedact,
        }  
        case "CLOSE__ADD__EMPLOYEE":
        return {...state,
            addEmployee: action.addEmployee,
            profile: action.profile,
            profileRedact: action.profileRedact,
        }  
        case "UPDATE":
        return {
            ...state,
            time: action.time
        }
        
}

    return {...state}
}