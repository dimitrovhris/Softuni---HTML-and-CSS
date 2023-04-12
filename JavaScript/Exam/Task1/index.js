function solve(input) {
    let n = Number(input[0]);
    let list = {};
    for (let i = 1; i <= n; i++) {
        let row = input[i].split(':');
        let [assignee, taskId, title, status, estimatedPoints] = row;
        list[assignee] = {};
        list[assignee][taskId] = 
            {
                title,
                status,
                estimatedPoints: Number(estimatedPoints)
            }
        
    }
    for (let i = n + 1; i < input.length; i++) {
        let row = input[i].split(':');
        let command = row[0];
        
        if (command === 'Add New') {
            let [command, assignee, taskId, title, status, estimatedPoints] = row;
            if (list.hasOwnProperty(assignee)) {
                list[assignee][taskId] = 
            {
                title,
                status,
                estimatedPoints: Number(estimatedPoints)
            }
                
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if(command === 'Change Staus'){
            
            let [command, assignee, taskId, newStatus ] = row;
            if(!list.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
            else if(!list[assignee].hasOwnProperty(taskId)){
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }
            else{
            list[assignee][taskId].staus = newStatus;
        }
            
        } else if(command === 'Remove Task'){
            let[command, assignee, index] = row;
            let num = Number(index);
            if(!list.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else if(num > Object.keys(list). length){
                console.log('Index is out of range!')
            } else{
            for(const [key, value] of Object.entries(list[assignee])){
                let indexCounter = 0;
                if(indexCounter === num){
                    delete list[assignee][key];
                    break;
                }
                indexCounter++;
            }}
        }

    }
    let toDoPoints = 0;
    let progressPoints = 0;
    let codePoints = 0;
    let donePoints = 0;

    for (const assignee in list) {
        for (const task in list[assignee]) {
            if(task.status === 'ToDo'){
                toDoPoints += task.estimatedPoints;
            } else if(task.status === 'In Progress'){
                progressPoints += task.estimatedPoints;
            } else if(task.status === 'Code Review'){
                codePoints += task.estimatedPoints;
            } else if(task.status === 'Done'){
                donePoints += task.estimatedPoints;
            }
        }     
    }
    let status = '';
    if(donePoints >= toDoPoints + progressPoints + codePoints){
        status = 'Sprint was successful!';
    } else{
        status = 'Sprint was unsuccessful...';
    }
    console.log(status);
}
solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
)