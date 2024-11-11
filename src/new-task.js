
import * as validate from "./validate";
import * as populate from "./populate";
import { compareAsc, format, formatDate, formatDistance, formatDistanceToNow } from "date-fns";

//this may not be needed?
export let taskList = [];


export default function newTask(){
    const mainArea = document.getElementById("main");

    mainArea.innerHTML =
    `<div id="newTaskMenu" class="newTaskMenu">
        <form action="" id="form" class="form" onkeydown="if(event.keyCode === 13){return false;}">
            <fieldset>
                <legend>New Task</legend>
                <div class="formControl taskName">
                    <label for="taskName">Task:</label>
                    <input type="text" name="taskName" id="taskName" class="taskName"
                    placeholder="Project Title::Task Name">
                    <div id="error" class="error"></div>
                </div>
                <div class="formControl taskDueDate">
                    <label for="">Due:</label>
                    <input type="date" name="taskDueDate" id="taskDueDate" class="taskDueDate">
                    <div id="error" class="error"></div>
                </div>
                <div class="formControl taskDescription">
                    <label for="taskDescription">Description:</label>
                    <textarea type="text" rows="5" name="taskDescription" id="taskDescription" class="taskDescription"
                    placeholder="Task Description"></textarea>
                    <div id="error" class="error"></div>
                </div>
                <div class="formControl submitNewTask">
                    <button id="submitBtn" class="submitBtn" type="button" onclick="">Submit</button>
                    <button id="cancelBtn" class="cancelBtn" type="button" onclick="">Cancel</button>
                    <p id="errorDescription" class="errorDescription">'error desc'</p>
                </div>
            </fieldset>
        </form>
    </div>`;

    const newTaskForm = document.getElementById("form");
    const taskName = document.getElementById("taskName");
    const taskDueDate = document.getElementById("taskDueDate");
    const taskDescription = document.getElementById("taskDescription");
    const taskMenuInputs = document.querySelectorAll("input");
    const submitBtn = document.getElementById("submitBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    function Task(name, description, date,dueDate){
        this.name = name;
        this.description = description;
        this.date = date;
        this.dueDate = dueDate;}

    cancelBtn.addEventListener("click", ()=>{
        newTaskForm.reset();
        mainArea.innerHTML = "";})

        
    taskMenuInputs.forEach((input)=>{
        input.addEventListener("focusout", (e)=>{validate.checkTaskInput(e);});

        input.addEventListener("keyup", (e)=>{validate.checkTaskInput(e);})})
  

    // taskDueDate.addEventListener("input", (e)=>{
    //     let fieldValue = e.currentTarget.value;
    //     const fieldID = e.currentTarget.id;
    //     let currentDate = formatDate(new Date(), 'yyyy-MM-dd');

    //     if(compareAsc(fieldValue, currentDate) != 1){
    //         validate.setError(fieldID, "dateInvalid");
    //         submitBtn.disabled = true;
    //         return 0;
    //     };
    //     validate.clearError();
    //     submitBtn.disabled = false;
    //     return 1;
    // });



    submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();

        let taskName = document.getElementById("taskName"); 
        
        if(taskName.value.trim() == ""){
            validate.setError(taskName.id, "empty");
            submitBtn.disabled = true;
            return 0;
            };

        // for(let i = 0; i<projectList.length; i++){
        //     if(projectName.value.trim().toLowerCase() == projectList[i].name.trim().toLowerCase()){
        //         validate.setError(projectName.id, "projectExists");
        //         return 0;
        //     }}  
      
        // const name = projectName.value.trim();
        // const description = projectDescription.value.trim();
        // let date = new Date();

        // const project = new Project(name, description, date);

        // projectList.push(project);
        // populate.navColumnRefresh();
        // newProjectForm.reset();
    })

};