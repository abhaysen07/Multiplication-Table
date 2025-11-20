function multiplicationTable() {
    let number = parseInt(document.getElementById("baseNumber").value);
    let startNumber = parseInt(document.getElementById("startNumber").value);
    let endNumber = parseInt(document.getElementById("endNumber").value);
    let table = "";
    for (i = startNumber; i<= endNumber ; i++){
        result = number * i;
        table += `${number} x ${i} = ${result} <br>`;
    }
    document.getElementById("tableOutput").innerHTML = table;
}