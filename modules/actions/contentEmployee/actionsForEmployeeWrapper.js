
export function openProfile (id) {
    return {
        type: "OPEN__PROFILE",
            profile: true,
            profileRedact: false,
            id: id,
    }
}

export function closeProfile() {
    return {
        type: "CLOSE__PROFILE",
            profile: false,
            profileRedact: false,
    }
}

export function profileRedact () {
    return {
        type: "PROFILE__REDACT",
            profile: false,
            profileRedact: true,
    }
}

export function closeRedactEployee (id) {
    return {
        type: "CLOSE__REDACTPROFILE",
            profile: true,
            profileRedact: false,
            id: id
    }
}