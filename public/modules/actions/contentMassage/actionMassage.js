export function massageContent (data) {
    return {
        type: "MASSAGE__CONTENT",
        dataMassage: data, 
        massageContent: true
    }
}