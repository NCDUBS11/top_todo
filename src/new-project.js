
import * as validate from "./validate";
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
                        <button id="submitBtn" class="submitBtn" type="button" onclick="">Submit</button>
                        <button id="cancelBtn" class="cancelBtn" type="button" onclick="">Cancel</button>
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
        const projectNameError = document.getElementById("projectNameSection").querySelector("#error");
        const errorDescription = document.getElementById("errorDescription");

        cancelBtn.addEventListener("click", ()=>{
            newProjectForm.reset();
            mainArea.innerHTML = "";
        })

        projectName.addEventListener("keyup", (e)=>{
            const fieldValue = e.currentTarget.value;
            const fieldID = e.currentTarget.id;
            if(validate.checkProjectName(fieldValue)){
                validate.clearError();
                return 1;
            }
            else if(fieldValue == ""){
                validate.setError(fieldID, "empty");
                return 0;
            }
            else{
                validate.setError(fieldID, "charLimit");
                return 0;
            }
        })


};