let taskNumber = 0;

function CreateTask ({ newPriority, newTitle, newDate, taskNumber}) {
    console.log(`task factory started ${newPriority}, ${newTitle}, ${newDate}, ${taskNumber}`)
    this.priority = newPriority;
    this.name = newTitle;
    this.date = newDate;
    this.number = taskNumber;
    
    
    
};

function newTaskHandler () {

    let newPriority = document.getElementById('priority').value;

    let newTitle = document.getElementById('input-task-title').value;

    let newDate = document.getElementById('input-task-due-date').value;


    
    if (newPriority !== "" && newTitle !== "" && newDate !== "") {

    console.log(`ready to start task factory  ${newPriority}, ${newTitle}, ${newDate}, ${taskNumber}`);

        let task = new CreateTask({newPriority, newTitle, newDate, taskNumber});
        clearFields();


        console.log(task);

        taskNumber += 1;
        

    } else {
        console.log('No task created... undefined values in input!');
    }
}

interfaceController();

function interfaceController() {

    let confirm = document.getElementById('confirm');
    confirm.addEventListener('click', newTaskHandler);

    let reset = document.getElementById('reset');
    reset.addEventListener('click', clearFields);

}

function clearFields () {
    document.getElementById('priority').selectedIndex = 0;
    document.getElementById('input-task-title').value ='';
    document.getElementById('input-task-due-date').value = '';
}

function displayProject () {

}

function displayTasks() {

}

function displayNewTask() {

}


function newProjectHandler () {

}

function currentProjectIdentity () {

}





function createProject (name) {

}

function assignTask () {

}

function projectConstructor () {

}

function editTask () {

}

//projectConstructor(home);
