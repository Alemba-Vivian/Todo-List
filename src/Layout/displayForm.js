const newTaskButton = document.querySelector('#btn-new-task');
const closeTaskButton = document.querySelector('#btn-close');

newTaskButton.addEventListener('click', showForm);
closeTaskButton.addEventListener('click', closeForm);

function showForm (){
    document.querySelector('.todos-form').style.display ="block";

}

function closeForm(){
    document.querySelector('.todos-form').style.display = "none";

}

export{showForm, closeForm};