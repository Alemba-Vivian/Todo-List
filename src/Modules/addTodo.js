import { todos } from "../Components/todos";
import { taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes } from "../Layout/DOM";
import { listItems, form } from "../Layout/DOM";




//working with the priority functions
let taskPriorityValue;
function displayPriority(){
   for(let i =0; i < taskPriority.length; i++){
        if(taskPriority[i].checked){
            taskPriorityValue = taskPriority[i].value;
            console.log(taskPriorityValue = taskPriority[i].value);
            console.log(taskPriority[i].value);
        }
    }

};

//submitting the form
function formSubmit(){

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        addTodos();
     
    
        // if((taskTitle.value === "" || taskTitle.value === null) 
        //   || (taskDescription.value === ""|| taskDescription.value ===null)
        //   || (taskDueDate.value === "" || taskDueDate === null)
        // //   || (taskPriority.value === "" || taskPriority === null)
        //   || (taskNotes.value === "" || taskNotes.value === null)
        //   )
        //   {
        //         alert("Ensure you input all the values in the field")
    
        //   }else{
        //         alert("The form has been submitted successfully");
        //         addTodos();
        //   }
         taskTitle.value = "";
         taskDescription.value = "";
         taskDueDate.value = "";
         taskPriority.value = "";
         taskNotes.value = ""; 
    })
    

}


// storing my objects in an array
let myTodos = [];

function addTodos(){

 const task =todos();

 displayPriority();

 task.title = taskTitle.value;
 task.description = taskDescription.value;
 task.dueDate = taskDueDate.value;
 task.priority = taskPriorityValue;
 task.notes = taskNotes.value;


 //pushing my tasks/todos into the array
 myTodos.push(task);


 //looping through my todo lists
 myTodos.forEach((element, index)=>{

//clear the array once an object is pushed
myTodos = [];
  const list = document.createElement('li');
  list.innerHTML =`<span>Task Title:</span> ${element.title} <br>
                   <span>Task Description:</span> ${element.description} <br>
                   <span>Task DueDate:</span> ${element.dueDate} <br>
                   <span>Task Priority:</span> ${element.priority} <br>
                   <span>Task Notes:</span> ${element.notes} <br>`;

  listItems.appendChild(list);
  console.log(listItems.appendChild(list));
 

console.log(myTodos);
  return myTodos[list];

 });
}


export{formSubmit}