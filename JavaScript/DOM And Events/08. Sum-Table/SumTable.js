function sumTable() {
    let table = document.getElementsByTagName('table')[0];
    let tableRows = Array.from(document.querySelectorAll('table tr'));
    let price = 0;
    for(let i = 1; i < tableRows.length; i++){
        let rowClildren = Array.from(tableRows[i].children);
        price += Number((rowClildren[1].textContent));
    }
    document.getElementById('sum').textContent = price;
}