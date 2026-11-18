const getStordBook = () => {
    const stordBookSTR = localStorage.getItem("readList");

    if (stordBookSTR) {
        const stordBookData = JSON.parse(stordBookSTR)
        return stordBookData
    } else {
        return [];
    }

}
const addToStordBD = (id) => {
    const stordBookData = getStordBook()
    if (stordBookData.includes(id)) {
        alert("ekhane ai data allrady ace ")
    } else {
        stordBookData.push(id);
        const data = JSON.stringify(stordBookData)
        localStorage.setItem("readList",data)
    }
}
export {addToStordBD}