export function massageContent (data, to) {

    return {
        type: "MASSAGE__CONTENT",
        dataMassage: data, 
        massageContent: true,
        to: to
    }
}