
import * as validate from "./validate";
import * as populate from "./populate";

export let projectList = [];

export default function newProject(){

    const mainArea = document.getElementById("main");

    mainArea.innerHTML = `
    <div id="newProjectMenu" class="newProjectMenu">
        <form action="" id="form" class="form" onkeydown="if(event.keyCode === 13){return false;}">
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
        let fieldValue = e.currentTarget.value;
        const fieldID = e.currentTarget.id;
        const regex = /(::)/g;
        let checkSym = [...fieldValue.matchAll(regex)];

        if(checkSym.length != 0){
            validate.setError(fieldID, "symbolInvalid");
            submitBtn.disabled = true;
            return 0;
        }        
        else if(validate.checkName(fieldValue)){
            validate.clearError();
            submitBtn.disabled = false;
            return 1;
        }
        else if(fieldValue == ""){
            validate.setError(fieldID, "empty");
            submitBtn.disabled = true;
            return 0;
        }
        else{
            validate.setError(fieldID, "charLimit");
            submitBtn.disabled = true;
            return 0;
        }

    })

    submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();

        let projectName = document.getElementById("projectName"); 
        
        if(projectName.value.trim() == ""){
            validate.setError(projectName.id, "empty");
            return 0;
            };

        for(let i = 0; i<projectList.length; i++){
            if(projectName.value.trim().toLowerCase() == projectList[i].name.trim().toLowerCase()){
                validate.setError(projectName.id, "projectExists");
                return 0;
            }}  
      
        const name = projectName.value.trim();
        const description = projectDescription.value.trim();
        let date = formatDate(new Date(), 'yyyy-MM-dd');

        const project = new Project(name, description, date);

        projectList.push(project);
        populate.navColumnRefresh();
        newProjectForm.reset();
    })

};