//TODO INPUT
const taskTitle = document.querySelector('#title');
const taskDescription = document.querySelector('#description');
const taskDueDate = document.querySelector('#dueDate');
const taskPriority = document.getElementsByName('priority');
const taskNotes = document.querySelector('#notes');

//PROJECT INPUT
const projectTitle =document.querySelector('#project-title');

//<UL> LIST ITEM
const listItems = document.querySelector('#todos');
const projectItems = document.querySelector('#project');

//<LI> PROJECTS iTEM
const personal = document.querySelector('#personal-project');
const home = document.querySelector('#home-project');
const work = document.querySelector('#work-project');

//FORM 
const form = document.querySelector('#formSubmit');
const projectForm =document.querySelector('#formProjectSubmit');

//BUTTON
const newTaskButton = document.querySelector('#btn-new-task');
const closeTaskButton = document.querySelector('#btn-close');
const newProjectButton = document.querySelector('#btn-new-project');
const closeProjectButton = document.querySelector('#btn-close-project');


//EVENT LISTENERS TO TASK BUTTONS
newTaskButton.addEventListener('click', showForm);
closeTaskButton.addEventListener('click', closeForm);

//EVENT LISTENERS TO PROJECT BUTTONS
newProjectButton.addEventListener('click',showProjectForm);
closeProjectButton.addEventListener('click', closeProjectForm);


//FUNCTIONS
function showForm (){
    document.querySelector('.todos-form').style.display ="block";

}

function closeForm(){
    document.querySelector('.todos-form').style.display = "none";

}

function showProjectForm(){
    document.querySelector('.project-form').style.display ="block";

}
function closeProjectForm(){
    document.querySelector('.project-form').style.display ="none";
}
export{
    showForm, closeForm, showProjectForm, closeProjectForm,
    listItems,projectItems,
    form, taskTitle, projectForm,
    taskDescription, 
    taskDueDate, taskPriority, taskNotes,
    personal, home, work,
    projectTitle
    };