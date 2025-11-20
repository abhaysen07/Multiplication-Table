/*
============================================================
📄 FILE: script.js
📌 PROJECT: Multiplication Table Learning Page (Enhanced)
👨‍💻 AUTHOR: Abhishek Kumar (Owner & Developer)
📅 CREATED: 2025
📝 PURPOSE:
This JavaScript file powers the multiplication table generator.
It reads user inputs from the HTML page, processes them using 
a loop, builds the full multiplication table line-by-line,
and prints it inside the <pre> output area.

The logic below is intentionally simple and beginner-friendly.
No behavior, values, or algorithm flow has been changed.
============================================================
*/

// ------------------------------------------------------------
// FUNCTION: multiplicationTable()
// Triggered when user clicks the "Generate Table" button
// ------------------------------------------------------------
function multiplicationTable() {

    // --------------------------------------------------------
    // Read the base number from the input field (string → int)
    // Example: User enters "5" → number becomes 5
    // --------------------------------------------------------
    let number = parseInt(document.getElementById("baseNumber").value);

    // --------------------------------------------------------
    // Read the start number of the range
    // Example: User enters "1" → startNumber becomes 1
    // --------------------------------------------------------
    let startNumber = parseInt(document.getElementById("startNumber").value);

    // --------------------------------------------------------
    // Read the end number of the range
    // Example: User enters "10" → endNumber becomes 10
    // --------------------------------------------------------
    let endNumber = parseInt(document.getElementById("endNumber").value);

    // --------------------------------------------------------
    // Prepare an empty string to store each line of the table
    // Every iteration of the loop will append one row
    // --------------------------------------------------------
    let table = "";

    // --------------------------------------------------------
    // Main loop:
    // Runs from startNumber → endNumber
    // Each loop multiplies the base number with the counter 'i'
    // --------------------------------------------------------
    for (let i = startNumber; i <= endNumber; i++) {

        // ----------------------------------------------------
        // Multiply the base number by the current loop value (i)
        // Example: 5 * 3 = 15
        // ----------------------------------------------------
        let result = number * i;

        // ----------------------------------------------------
        // Add one formatted line to the output
        // Each line follows the pattern:
        // "<base> x <i> = <result>"
        // Example output:
        // 5 x 3 = 15
        // ----------------------------------------------------
        table += `${number} x ${i} = ${result}\n`;
    }

    // --------------------------------------------------------
    // Display the final table in the HTML <pre> block
    // Using textContent to preserve new lines (\n)
    // --------------------------------------------------------
    document.getElementById("tableOutput").textContent = table;
}