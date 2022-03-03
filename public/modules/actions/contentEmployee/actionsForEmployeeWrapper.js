
export function openProfile (id) {
    return {
        type: "OPEN__PROFILE",
        addEmployee: false,
        profile: true,
        profileRedact: false,
        id: id,
    }
}

export function closeProfile() {
    return {
        type: "CLOSE__PROFILE",
        addEmployee: false,
        profile: false,
        profileRedact: false,
    }
}

export function profileRedact () {
    return {
        type: "PROFILE__REDACT",
        addEmployee: false,
        profile: false,
        profileRedact: true,
    }
}

export function closeRedactEployee (id) {
    return {
        type: "CLOSE__REDACTPROFILE",
        addEmployee: false,
        profile: true,
        profileRedact: false,
        id: id
    }
}

export function addEmployee () {
    return {
        type: "ADD__EMPLOYEE",
        addEmployee: true,
        profile: false,
        profileRedact: false,
         
    }
}

export function closeAddEployee () {
    return {
        type: "CLOSE__ADD__EMPLOYEE",
        addEmployee: false,
        profile: false,
        profileRedact: false,
    }
}