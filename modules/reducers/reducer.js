
import {initialState} from "../../app.js"

export function reducer (state = initialState, action) {
    console.log(action.TableWork)
switch (action.type) {
    case "CHOICE__TABLE__WORK":
        return {...state, TableWork: action.TableWork}
}

    return {...state}
}