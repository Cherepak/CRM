export function organization (data) {
    return {
        type: "ORGANIZATION",
        organization: true ,
        organizationData: data,
        addCliente:false,
        cliente: false
    }
}

export function cliente (data) {
    return {
        type: "CLIENTE",
        organization: false ,
        addCliente:false,
        cliente: true,
        clienteData: data,
    }
}

export function addCliente() {
    return {
        type: "ADD__CLIENTE",
        organization: false ,
        addCliente:true,
        cliente: false,
    }
}

export function organizationFace() {
    return {
        type: "ORGANIZATION__FACE",
        organizationFace:true,
        fizFace: false
    }
}

export function fizFace() {
    return {
        type: "FIZ__FACE",
        organizationFace:false,
        fizFace: true,
    }
}

export function moreAboutOrganization (data) {
    return {
        type: "MORE__ABOUT__ORGANIZATION",
        moreAboutOrganization: true,
        redactOrganization: false,
        redactFizFace: false,
        moreAboutOrganizationData:data,
        moreAboutFizFace: false,
        organization: false ,
        cliente: false
    }
}


export function moreAboutFizFace (data) {
    return {
        type: "MORE__ABOUT__FIZ__FACE",
        redactOrganization: false,
        redactFizFace: false,
        moreAboutOrganization: false,
        moreAboutFizFace: true,
        moreAboutFizFaceData: data,
        organization: false ,
        cliente: false
    }
}

export function redactOrganization () {
    return {
        type: "REDACT__ORGANIZATION",
        redactOrganization: true,
        redactFizFace: false,
        moreAboutOrganization: false,
        moreAboutFizFace: false,
        organization: false ,
        
    }
}

export function redactFizFace () {
    return {
        type: "REDACT__FIZ_FACE",
        redactFizFace: true,
        redactOrganization: false,
        moreAboutOrganization: false,
        moreAboutFizFace: false,
        cliente: false
    }
}