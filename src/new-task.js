
import { setData } from "./new-project"
import * as validate from "./validate";
import { Project, projectList } from "./new-project";
import * as populate from "./populate";
import dashboardLoad from "./dashboard";
import { compareAsc, format, formatDate, formatDistance, formatDistanceToNow } from "date-fns";


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
                    <button id="cancelBtn" class="cancelBtn" type="button" onclick="">Close</button>
                    <p id="errorDescription" class="errorDescription">'error desc'</p>
                </div>
            </fieldset>
        </form>
    </div>`;

    const newTaskForm = document.getElementById("form");
    // let taskName = document.getElementById("taskName");
    // let taskDueDate = document.getElementById("taskDueDate");
    // let taskDescription = document.getElementById("taskDescription");
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
        mainArea.innerHTML = "";
        dashboardLoad();})

        
    taskMenuInputs.forEach((input)=>{
        input.addEventListener("focusout", (e)=>{
            validate.checkTaskInput(e);});

        input.addEventListener("keyup", (e)=>{
            validate.checkTaskInput(e);})})


    submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        validate.checkTaskErrors();

        let taskName = document.getElementById("taskName").value.trim();
        let taskDueDate = document.getElementById("taskDueDate").value;
        let taskDescription = document.getElementById("taskDescription").value.trim();
        
        let task;
        let projExists = false;
        let date = new Date();
        const regex = /(::)/g;
        let checkSym = [...taskName.matchAll(regex)];

        if(validate.checkEmpty(taskName)){
            validate.setError("taskName", "empty");
            submitBtn.disabled = true;
            return 0;
        }

        if(validate.checkSymbol(checkSym) == 0){
                task = new Task(taskName, taskDescription, date, taskDueDate);

                projectList.forEach((project)=>{
                    if(project.name == "General Tasks"){
                        project.tasks.push(task);
                        return 1;}})} 


        if(validate.checkSymbol(checkSym) == 1){
            const cleanValues = validate.taskNameSplit(taskName);
            taskName = cleanValues[1];
            const projectName = cleanValues[0];
            task = new Task(taskName, taskDescription, date, taskDueDate);

            projectList.forEach((project)=>{
                if(project.name.toLowerCase() == projectName.toLowerCase()){
                    project.tasks.push(task);
                    projExists = true;
                    return 1;}})
                
            if(!projExists){
                let project = new Project(projectName, "", date);
                project.tasks.push(task);
                projectList.push(project);}}
        
        populate.navColumnRefresh();
        newTaskForm.reset();
        setData(projectList);
    })


};