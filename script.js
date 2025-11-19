function multiplicationTable() {
    let number = parseint(document.getElementById("baseNumber").value);
    let table = "";
    for (i = startNumber; i<= endNumber ; i++){
        result = number * i;
        table += `${number} x ${i} = ${result} <br>`;
    }
    document.getElementById("tableOutput").innerHTML = table;
}