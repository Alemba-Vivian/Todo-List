import { projectItems } from "../Layout/DOM";
import { home, personal, work } from "../Layout/DOM";
import { todos } from "./todos";
import { formSubmit } from "../Modules/todoFormSubmit";



function mydefaultProjects(){
      if(home){

        home.addEventListener('click',()=>{
        const container = document.querySelector('#todos');
        container.replaceChildren();
        formSubmit();
       } );  
  
      }
}

export{mydefaultProjects};


