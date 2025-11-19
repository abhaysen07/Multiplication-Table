function multiplicationTable() {
    let number = parseint(document.getElementById("numberInput").value);
    let table = "";
    for (i = 1; i<= limit ; i++){
        result = number * i;
        table += `${number} x ${i} = ${result} <br>`;
    }
    document.getElementById("tableOutput").innerHTML = table;
}