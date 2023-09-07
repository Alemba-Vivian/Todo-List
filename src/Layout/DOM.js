//INPUT
const taskTitle = document.querySelector('#title');
const taskDescription = document.querySelector('#description');
const taskDueDate = document.querySelector('#dueDate');
const taskPriority = document.getElementsByName('priority');
const taskNotes = document.querySelector('#notes');

//<UL> LIST ITEM
const listItems = document.querySelector('#todos');

//FORM 
const form = document.querySelector('#formSubmit');

//BUTTON
const newTaskButton = document.querySelector('#btn-new-task');
const closeTaskButton = document.querySelector('#btn-close');

//EVENT LISTENERS TO BUTTONS
newTaskButton.addEventListener('click', showForm);
closeTaskButton.addEventListener('click', closeForm);

//FUNCTIONS
function showForm (){
    document.querySelector('.todos-form').style.display ="block";

}

function closeForm(){
    document.querySelector('.todos-form').style.display = "none";

}

export{
    showForm, closeForm,
    listItems,
    form, taskTitle,
    taskDescription, 
    taskDueDate, taskPriority, taskNotes
    };