import { formSubmit } from "../Modules/addTodo"

const todos=(title, description, dueDate, priority,notes)=>{
    const getDate=()=>{

    }

    const getodos=()=>{
        return formSubmit();
    }

    return{
        title, description, dueDate, priority, notes, getDate, getodos
    }

}
// const todos1 = todos("shopping", "go shopping", "04/09/2023","important", "add groceries");
// console.log(todos1.getodos());

export{todos};