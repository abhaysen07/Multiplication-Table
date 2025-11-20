function multiplicationTable() {
    let number = parseInt(document.getElementById("baseNumber").value);
    let startNumber = parseInt(document.getElementById("startNumber").value);
    let endNumber = parseInt(document.getElementById("endNumber").value);
    let table = "";
    for (let i = startNumber; i<= endNumber ; i++){
        let result = number * i;
        table += `${number} x ${i} = ${result}\n`;
    }
    document.getElementById("tableOutput").textContent = table;
}