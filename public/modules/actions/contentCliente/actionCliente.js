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
        organizationFace:false,
        fizFace: false
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
        fizFace: true
    }
}