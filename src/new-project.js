
import * as validate from "./validate";
import {projectList} from "./index";
export default function newProject(){

    const mainArea = document.getElementById("main");

    mainArea.innerHTML = `
    <div id="newProjectMenu" class="newProjectMenu">
        <form action="" id="form" class="form">
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
    </div>
    `;
    

    const newProjectForm = document.getElementById("form");
    const submitBtn = document.getElementById("submitBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const projectName = document.getElementById("projectName");
    const projectDescription = document.getElementById("projectDescription");
    const errorDescription = document.getElementById("errorDescription");

    function Project(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.tasks = [];
    }

    cancelBtn.addEventListener("click", ()=>{
        newProjectForm.reset();
        mainArea.innerHTML = "";
    })

    projectName.addEventListener("keyup", (e)=>{
        const fieldValue = e.currentTarget.value;
        const fieldID = e.currentTarget.id;
        if(validate.checkProjectName(fieldValue)){
            validate.clearError();
            submitBtn.enable;
            return 1;
        }
        else if(fieldValue == ""){
            validate.setError(fieldID, "empty");
            submitBtn.disable;
            return 0;
        }
        else{
            validate.setError(fieldID, "charLimit");
            submitBtn.disable;
            return 0;
        }
    })


    submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();

        const navColumn = document.getElementById("navCol navColProjects");    

        if(projectName.value.trim() == ""){
            validate.setError(projectName.id, "empty");
            return 0;
        }

        const name = projectName.value.trim();
        const description = projectDescription.value.trim();
        let date = new Date();

        const project = new Project(name, description, date);

        const blockDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const listUl = document.createElement("ul");

        blockDiv.setAttribute("id", "projectBlock");
        blockDiv.setAttribute("class", "projectBlock");
        titleDiv.setAttribute("id", "projectTitle");
        titleDiv.setAttribute("class", "projectTitle");
        listUl.setAttribute("id", "projectListInfo");
        listUl.setAttribute("class", "projectListInfo");

        titleDiv.innerText = project.name;

        blockDiv.appendChild(titleDiv);
        titleDiv.appendChild(listUl);

        navColumn.appendChild(blockDiv);

        projectList.push(project);
        newProjectForm.reset();

    })




};