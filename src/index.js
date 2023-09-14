import './styles/style.css';
import { showForm } from './Layout/DOM';
import { closeForm } from './Layout/DOM';
import { showProjectForm } from './Layout/DOM';
import { closeProjectForm } from './Layout/DOM';
import { formSubmit } from './Modules/addTodo';
import { mydefaultProjects } from './Components/default';
import { submitProjects } from './Modules/addProject';

formSubmit();
// mydefaultProjects();
submitProjects();

