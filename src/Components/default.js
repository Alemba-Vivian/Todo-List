import { projectItems } from "../Layout/DOM";
import { home, personal, work } from "../Layout/DOM";
import { todos } from "./todos";
import { formSubmit } from "../Modules/todoFormSubmit";
import { myDefaultProjects } from "../Layout/DOM";



function mydefaultProjects(){



      for(let i=0; i < myDefaultProjects.length; i++){
            const defaultprojects = myDefaultProjects[i];
           

            defaultprojects.addEventListener('click', ()=>{
                  console.log("hello there")
                  const container = document.querySelector('#todos');
                  container.replaceChildren();
                  formSubmit();    
            })
      }
      // if(home){

      //   home.addEventListener('click',()=>{
      //   const container = document.querySelector('#todos');
      //   container.replaceChildren();
      //   formSubmit();
      //  } );  
  
      // }
}

export{mydefaultProjects};


