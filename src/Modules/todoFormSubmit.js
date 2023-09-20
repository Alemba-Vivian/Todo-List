import { validateTodos } from "./addTodo";
import { form } from "../Layout/DOM";


//submitting the form
export function formSubmit(){

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        validateTodos();
    
    })
    

}
