function colorize() {
    let rows = document.querySelectorAll(`table tbody tr:nth-child(even)`);

    for (const row of rows) {
        let childrenArray = Array.from(row.children);
        childrenArray.forEach(e => e.style = `background-color: teal`);
    }
}