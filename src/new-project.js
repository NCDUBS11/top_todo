export default function newProject(){

    const mainArea = document.getElementById("main");

        mainArea.innerHTML = `
        <div id="newProjectMenu" class="newProjectMenu">
            <form action="" id="form" class="form">
                <fieldset>
                    <legend>New Project</legend>
                    <div class="formControl projectName">
                        <label for="projectName">Project Title:</label>
                        <input type="text" name="projectName" id="projectName" class="projectName"
                        placeholder="Project Title">
                    </div>
                    <div class="formControl projectDescription">
                        <label for="projectDescription">Description:</label>
                        <textarea type="text" rows="5" name="projectDescription" id="projectDescription" class="taskDescription"
                        placeholder="Project Description"></textarea>
                    </div>
                    <div class="formControl submitNewProject">
                        <button id="submitBtn" class="submitBtn" type="button" onclick="">Submit</button>
                        <button id="cancelBtn" class="cancelBtn" type="button" onclick="">Cancel</button>
                        <p id="error" class="error">'error desc'</p>
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

        cancelBtn.addEventListener("click", ()=>{
            newProjectForm.reset();
            mainArea.innerHTML = "";
        })


};