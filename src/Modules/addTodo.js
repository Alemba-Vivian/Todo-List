import { todos } from "../Components/todos";
import { taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes } from "../Layout/DOM";
import { listItems} from "../Layout/DOM";




//working with the priority functions
let taskPriorityValue;
function displayPriority(){
   for(let i =0; i < taskPriority.length; i++){
        if(taskPriority[i].checked){
            taskPriorityValue = taskPriority[i].value;
            console.log(taskPriorityValue = taskPriority[i].value);
        }
    }

};


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

   //creating the edit icon to edit each todos
   const editIcon = document.createElement('i');
   editIcon.className ='fa-regular fa-pen-to-square';
   editIcon.id ='edit'

  //creating the trash can to delete each todos
   const trashIcon = document.createElement('i');
   trashIcon.className ='fa-solid fa-trash';
   trashIcon.id ='trash';


   //creating the done icon
   const completeIcon = document.createElement('i');
   completeIcon.className ='fa-solid fa-square-check';
   completeIcon.id = 'check';

   //completed message
   const completed = document.createElement('h4');
   completed.id = 'completed';
   completed.innerHTML =`COMPLETED TASKS`;
   completed.style.display ='none'
   
   //adding eventlistener to the edit con
   editIcon.addEventListener('click', ()=>{
    
   })

   //adding eventlistener to the complete icon
   completeIcon.addEventListener('click', ()=>{
    console.log("i am done");
    // completed.style.display ='block';
    list.classList.toggle('strike');
     
   });

   //adding click to the trashIcon
   trashIcon.addEventListener('click', ()=>{
   listItems.removeChild(list);
   })

  list.innerHTML =`Title:<span class="done-todos">${element.title}</span><br>
                   Description:<span class="done-todos">${element.description}</span><br>
                   DueDate: <span class="done-todos">${element.dueDate}</span><br>
                   Priority: <span class="done-todos">${element.priority}</span><br>
                   Notes: <span class="done-todos">${element.notes}</span><br>`;

             
  list.appendChild(completed);
  list.appendChild(editIcon);       
  list.appendChild(completeIcon);           
  list.appendChild(trashIcon);                
  listItems.appendChild(list);
 
  
  console.log(list.appendChild(trashIcon));
  console.log(listItems.appendChild(list));
 
  return myTodos[list];

 });
}


function validateTodos(){
    if(taskTitle.value ==="" || taskDescription.value === "" || taskDueDate.value === "")
          {
              alert("Ensure you input all the values in the field")
              console.log("Ensure you input all the values in the field")
    
          }else{
                alert("The form has been submitted successfully");
                addTodos();
          }
         taskTitle.value = "";
         taskDescription.value = "";
         taskDueDate.value = "";
        //taskPriority.value = "";

}



export{taskPriorityValue, myTodos, validateTodos}