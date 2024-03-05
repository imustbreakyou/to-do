let taskNumber = 0;

function CreateTask ({ newPriority, newTitle, newDate, taskNumber}) {
    console.log(`task factory started ${newPriority}, ${newTitle}, ${newDate}, ${taskNumber}`)
    this.priority = newPriority;
    this.name = newTitle;
    this.date = newDate;
    this.number = taskNumber;
};

function CreateProject (name) {
    console.log(`new project factory started ${name}`)
    this.name = name;
    this.tasks = [];

};



interfaceController();


function interfaceController() {

    let home = new CreateProject('home');
    console.log ({home});
    currentProject = home;

    let confirm = document.getElementById('confirm');
    confirm.addEventListener('click', newTaskHandler);

    let reset = document.getElementById('reset');
    reset.addEventListener('click', clearFields);

    let addProject = document.getElementById('add-project');
    addProject.addEventListener('click', newProjectHandler);


    function clearFields () {
        document.getElementById('priority').selectedIndex = 0;
        document.getElementById('input-task-title').value ='';
        document.getElementById('input-task-due-date').value = '';
    }

    function newProjectHandler () {
        let newProject = document.getElementById('input-project-title').value;
        let project = new CreateProject(newProject);
        console.log( {project} );
    
    }

    function currentProjectIdentity (home) {
        console.log(`the current project is ${home}`)
        return home;
    }
    


    function newTaskHandler () {

        let currentProject = currentProjectIdentity();
    
        let newPriority = document.getElementById('priority').value;
    
        let newTitle = document.getElementById('input-task-title').value;
    
        let newDate = document.getElementById('input-task-due-date').value;
    
    
        
        if (newPriority !== "" && newTitle !== "" && newDate !== "") {
    
        console.log(`ready to start task factory  ${newPriority}, ${newTitle}, ${newDate}, ${taskNumber}`);
    
            let task = new CreateTask({newPriority, newTitle, newDate, taskNumber});
            home.tasks.push(task);
            clearFields();
    
    
            console.log(task);
            console.log({currentProject});
            console.log( {home});
    
            taskNumber += 1;
            
    
        } else {
            console.log('No task created... undefined values in input!');
        }
    }
    
   
    







}


function displayProject () {

}

function displayTasks() {

}

function displayNewTask() {

}












function projectConstructor () {

}

function editTask () {

}

//projectConstructor(home);
