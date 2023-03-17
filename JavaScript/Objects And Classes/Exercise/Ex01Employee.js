function solve(array) {
    let employeeList = {};
    for (const name of array) {
        employeeList[name] = name.length;
    }
    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`)
    }
}
