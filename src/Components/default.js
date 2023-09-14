import { projectItems } from "../Layout/DOM";
import { home, personal, work } from "../Layout/DOM";
import { todos } from "./todos";



function mydefaultProjects(){
    const todos1= todos()
   if(home ){
  
    home.addEventListener('click',()=>{
        // todos1.getodos;
        // const container = document.querySelector('.todos-container');
        // container.replaceChild('#todos');

       

        //console.log(todos.getodos);

    } );  
  
   }else if(work){
    home.addEventListener('click', todos1.getodos); 

   }else if(personal){
    home.addEventListener('click', todos1.getodos); 

   }
}

export{mydefaultProjects};


