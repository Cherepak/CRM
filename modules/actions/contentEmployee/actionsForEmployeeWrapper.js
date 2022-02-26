
export function openProfile (id) {
    return {
        type: "OPEN__PROFILE",
        TableWork  : false,
        Employee  : true,
            profile: true,
            id: id,
        Task : false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Setting : false,
    }
}

export function closeProfile() {
    return {
        type: "CLOSE__PROFILE",
        TableWork  : false,
        Employee  : true,
            profile: false,
        Task : false,
        Sklad  : false,
        Clientele : false,
        Massage : false,
        Setting : false,
    }
}