function colorize() {
    let rows = Array.from(document.querySelectorAll(`table tbody tr:nth-child(even)`));

    for (const row of rows) {
        row.style = `background-color: teal`;
    }
}