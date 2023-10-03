import { todos } from "../Components/todos";
import {
  taskTitle,
  taskDescription,
  taskDueDate,
  taskPriority,
  taskNotes,
  form,
  closeForm,
} from "../Layout/DOM";
import { listItems } from "../Layout/DOM";
import { showForm } from "../Layout/DOM";

//Dom
const closeModal = document.getElementById('btn-add');


//when the add button is clicked
//submitting the form
const formSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateTodos();
  });
};

//form validations
const validateTodos = () => {
  if (
    taskTitle.value === "" ||
    taskDescription.value === "" ||
    taskDueDate.value === ""
  ) {
    alert("Ensure you input all the values in the field");
    console.log("Ensure you input all the values in the field");
  } else {
    acceptData();
    
    closeForm();
    closeModal.click();
      
    // IIEF Immediately Invoked Expression Functions
    (()=>{
        closeForm();
    })()


  }
  
};


//working with the priority functions
let taskPriorityValue;
function displayPriority() {
  for (let i = 0; i < taskPriority.length; i++) {
    if (taskPriority[i].checked) {
      taskPriorityValue = taskPriority[i].value;
      // console.log((taskPriorityValue = taskPriority[i].value));
    }
  }
}




//Accepting data
// storing my objects in an array
let myTodos = [];

const acceptData = () => {
   const task = todos();
 
  displayPriority();
  //   myTodos.push(
  //   todos(
  //     taskTitle.value,
  //     taskDescription.value,
  //     taskDueDate.value,
  //     taskPriorityValue, 
  //     taskNotes.value)
    
  // )


  task.title = taskTitle.value;
  task.description = taskDescription.value;
  task.dueDate = taskDueDate.value;
  task.priority = taskPriorityValue;
  task.notes = taskNotes.value;

  //pushing my tasks/todos into the array
  myTodos.push(task);
  console.log( myTodos);

  //storing my todos to the localstorage
  localStorage.setItem("myTodos", JSON.stringify(myTodos));

  addTodos(); 
};



const addTodos = () => {
    listItems.innerHTML ="";
  //looping through my todo lists
   
    myTodos.forEach((element, index) => {
    //clear the array once an object is pushed
  
    const list = document.createElement("li")
    list.id = index;
        // //CREATING P TAG FOR THE INPUTS RECEIVED FROM THE USER
    const titleHTML = document.createElement("p");
    titleHTML.id = "title";
    titleHTML.textContent = `${element.title}`;

    const descriptionHTML = document.createElement("p");
    descriptionHTML.id = "description";
    descriptionHTML.textContent = `${element.description}`;

    const dueDateHTML = document.createElement("p");
    dueDateHTML.id = "dueDate";
    dueDateHTML.textContent = `${element.dueDate}`;

    const priorityHTML = document.createElement("p");
    priorityHTML.id = "priority";
    priorityHTML.textContent = ` ${element.priority}`;

    const notesHTML = document.createElement("p");
    notesHTML.id = "notes";
    notesHTML.textContent = ` ${element.notes}`;


    //creating the edit icon to edit each todos
    const editIcon = document.createElement("i");
    editIcon.className = "fa-regular fa-pen-to-square";
    editIcon.id = "edit";
    editIcon.classList.add("edit-me");


       //adding eventlistener to the edit con

      editIcon.addEventListener("click", (e) => {

      showForm();

      const selectedTodos = list;
    

      taskTitle.value = selectedTodos.children[0].innerHTML;
      taskDescription.value = selectedTodos.children[1].innerHTML;
      taskDueDate.value = selectedTodos.children[2].innerHTML;
      taskPriorityValue = selectedTodos.children[3].innerHTML;
      taskNotes.value = selectedTodos.children[4].innerHTML;
    

       //updating my todos in the localstorage
       localStorage.setItem("myTodos", JSON.stringify(myTodos));
         //removing from the localstorage
         myTodos.splice(selectedTodos.id, 1);
      // selectedTodos.remove();

      console.log(myTodos);

      });

     //creating the done icon
     const completeIcon = document.createElement("i");
     completeIcon.className = "fa-solid fa-square-check";
     completeIcon.id = "check";


    //adding eventlistener to the complete icon
      completeIcon.addEventListener("click", () => {
    
      // completed.style.display ='block';
      list.classList.toggle("strike");
    });





    //creating the trash can to delete each todos
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash-can";
    trashIcon.id = "trash";

   // //adding click to the trashIcon

    trashIcon.addEventListener("click", () => {
      listItems.removeChild(list);
      console.log(list.id);

      //removing from the localstorage
      myTodos.splice(list.id, 1);
       //updating my todos in the localstorage
     localStorage.setItem("myTodos", JSON.stringify(myTodos))

      console.log(myTodos);
    });

 
   
    //APPENDING THE TAGS TO THE LIST
    list.appendChild(titleHTML);
    list.appendChild(descriptionHTML);
    list.appendChild(dueDateHTML);
    list.appendChild(priorityHTML);
    list.appendChild(notesHTML);

    list.appendChild(editIcon);
    list.appendChild(completeIcon);
    list.appendChild(trashIcon);
    listItems.appendChild(list);


    // return myTodos[list];
    // console.log( myTodos);
   
   
  return myTodos[list];
    
})

  resetForm();

  
 
  };

const resetForm=()=>{
    taskTitle.value = "";
    taskDescription.value = "";
    taskDueDate.value = "";
}

//IIEF
(()=>{
  myTodos =JSON.parse(localStorage.getItem("myTodos"));
  console.log(myTodos);
  addTodos();

})()

export { taskPriorityValue, myTodos, validateTodos, formSubmit };
