
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
        
}

    return {...state}
}