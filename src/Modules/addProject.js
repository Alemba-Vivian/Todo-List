import { project } from "../Components/project"
import { projectForm, projectItems, projectTitle } from "../Layout/DOM";

// storing my projects in an array
let myProjects =[];

function addProjects(){
    
 //creating a new instance of an object
    const project1 = project();
    project1.name = projectTitle.value

    //pushing the object inside the array
    myProjects.push(project1);

    //looping through the objects
    myProjects.forEach((element, index)=>{
        myProjects = [];

        const projectList = document.createElement('li');
        // projectList.id ="project-list";
        projectList.innerHTML =`${element.name}`;

        projectItems.appendChild(projectList);
        console.log(projectItems.appendChild(projectList));

        console.log(myProjects);
        return myProjects[projectList];

    });
    
}

//submit button
function submitProjects(){
    projectForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(projectTitle.value === "" || projectTitle.value === null || projectTitle.value === undefined)
        {
            alert("Ensure you fill all the inputs values");
        }else{
            alert("Form is submitted successfully");
            addProjects();
        }
        projectTitle.value = "";
    })

}

export{submitProjects};