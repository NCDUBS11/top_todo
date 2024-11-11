
import * as validate from "./validate";
import * as populate from "./populate";
import { compareAsc, format, formatDate, formatDistance, formatDistanceToNow } from "date-fns";

/*Create initial project folder and add to projectList*/

const generalProjectObj={
    name:"Unassigned Tasks",
    description:"Tasks that haven't been assigned a project reside here",
    date:formatDate(new Date(), 'yyyy-MM-dd'),
    tasks:["Create a project"]}

export let projectList = [generalProjectObj];

/*New Project() - Provides user with new-project form field. Checks input field(s) and provides errors. Will create new project object, add to projectList var, update UI and reset form.*/

export default function newProject(){
    const mainArea = document.getElementById("main");

    mainArea.innerHTML =
    `<div id="newProjectMenu" class="newProjectMenu">
        <form id="form" class="form" onkeydown="if(event.keyCode === 13){return false;}">
            <fieldset>
                <legend>New Project</legend>
                <div id="projectNameSection" class="formControl">
                    <label for="projectName">Project Title:</label>
                    <input type="text" name="projectName" id="projectName" class="projectName"
                    placeholder="Project Title">
                    <div id="error" class="error"></div>
                </div>
                <div id="projectDescriptionSection" class="formControl">
                    <label for="projectDescription">Description:</label>
                    <textarea type="text" rows="5" name="projectDescription" id="projectDescription" class="projectDescription"
                    placeholder="Project Description"></textarea>
                    <div id="error" class="error"></div>
                </div>
                <div class="formControl submitNewProject">
                    <button id="submitBtn" class="submitBtn" type="button">Submit</button>
                    <button id="cancelBtn" class="cancelBtn" type="button">Cancel</button>
                    <p id="errorDescription" class="errorDescription">'error desc'</p>
                </div>
            </fieldset>
        </form>
    </div>`;

    const newProjectForm = document.getElementById("form");
    const projectName = document.getElementById("projectName");
    const projectDescription = document.getElementById("projectDescription");
    const errorDescription = document.getElementById("errorDescription");
    const submitBtn = document.getElementById("submitBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    function Project(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.tasks = [];}


    cancelBtn.addEventListener("click", ()=>{
        newProjectForm.reset();
        mainArea.innerHTML = "";})

    projectName.addEventListener("keyup", (e)=>{
        validate.checkProjectInput(e)});

    submitBtn.addEventListener("click", (e)=>{
        e.preventDefault(); 
        const name = projectName.value.trim();
        const description = projectDescription.value.trim();

        if(validate.checkEmpty(name)){
            validate.setError("projectName", "empty");
            submitBtn.disabled = true;
            return 0;
        }
      
        let date = formatDate(new Date(), 'yyyy-MM-dd');

        const project = new Project(name, description, date);

        projectList.push(project);
        populate.navColumnRefresh();
        newProjectForm.reset();})
};