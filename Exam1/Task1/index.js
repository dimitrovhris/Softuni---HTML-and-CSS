function solve(input) {
    let n = Number(input[0]);
    let asiignees = {};
    for (let i = 1; i <= n; i++) {
        let rowSplit = input[i].split(':');
        let [name, taskId, title, status, estimatedPoints] = rowSplit;
        if (!asiignees.hasOwnProperty(name)) {
            asiignees[name] = {};
        }
        asiignees[name][taskId] = {
            title,
            status,
            estimatedPoints
        }
    }
    for (let i = n + 1; i < input.length; i++) {
        let rowSplit = input[i].split(':');
        let command = rowSplit[0];
        switch (command) {
            case 'Add New':
                let [commandAdd, nameAdd, taskIdAdd, titleAdd, statusAdd, estimatedPointsAdd] = rowSplit;
                if (asiignees.hasOwnProperty(nameAdd)) {
                    asiignees[nameAdd][taskIdAdd] = {
                        title: titleAdd,
                        status: statusAdd,
                        estimatedPoints: estimatedPointsAdd
                    }
                } else {
                    console.log(`Assignee ${nameAdd} does not exist on the board!`);
                }
                break;
            case 'Change Status':
                let [commandChange, nameChange, taskIdChange, newStatusChange] = rowSplit;
                if (asiignees.hasOwnProperty(nameChange)) {
                    if (asiignees[nameChange].hasOwnProperty(taskIdChange)) {
                        asiignees[nameChange][taskIdChange]['status'] = newStatusChange;
                    } else {
                        console.log(`Task with ID ${taskIdChange} does not exist for ${nameChange}!`);
                    }
                } else {
                    console.log(`Assignee ${nameChange} does not exist on the board!`)
                }
                break;
            case 'Remove Task':
                let [commandRemove, nameRemove, indexRemove] = rowSplit;
                if (asiignees.hasOwnProperty(nameRemove)) {
                    let index = Number(indexRemove);
                    let indexCounter = 0;
                    let taskKeys = Object.keys(asiignees[nameRemove]);
                    if (index >= Object.keys(taskKeys).length || index  < 0){
                        console.log('Index is out of range!');
                    } else {
                        for (const task of taskKeys) {
                            if (indexCounter === index) {
                                delete asiignees[nameRemove][task];
                            }
                            indexCounter++;
                        }
                    }
                } else {
                    console.log(`Assignee ${nameRemove} does not exist on the board!`);
                }
                break;
        }
    }
    let toDoPoints = 0;
    let inProgressPoints = 0;
    let codePoints = 0;
    let donePoints = 0;

    for (const name in asiignees) {
        for (const task in asiignees[name]) {
            let status = asiignees[name][task]['status'];
            let points = Number(asiignees[name][task]['estimatedPoints']);
            if(status === 'ToDo'){
                toDoPoints += points;
            } else if(status === 'In Progress'){
                inProgressPoints += points;
            } else if(status === 'Code Review'){
                codePoints += points;
            } else if(status === 'Done'){
                donePoints += points;
            }
        }
    }
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codePoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if(donePoints >= inProgressPoints + codePoints + toDoPoints){
        console.log('Sprint was successful!');
    } else{
        console.log(`Sprint was unsuccessful...`);
    }
}
solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]

);
