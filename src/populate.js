import {projectList} from "./new-project";
import {compareDates} from "./validate";
import {isValid, getDate, getMonth, getYear} from "date-fns";


export function navColumnRefresh(){
    const navColumn = document.getElementById("navCol navColProjects"); 

    navColumn.innerHTML = "";

    for(let i=0; i<projectList.length; i++){
        const blockDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const listUl = document.createElement("ul");

        blockDiv.setAttribute("id", "projectBlock");
        blockDiv.setAttribute("class", "projectBlock");
        titleDiv.setAttribute("id", "projectTitle");
        titleDiv.setAttribute("class", "projectTitle");
        listUl.setAttribute("id", "projectListInfo");
        listUl.setAttribute("class", "projectListInfo");


        titleDiv.innerText = projectList[i].name;

        projectList[i].tasks.forEach((task)=>{
            const listLi = document.createElement("li");
            listLi.setAttribute("id", "projectTask");
            listLi.setAttribute("class", "projectTask");
            listLi.innerText = task.name;
            listUl.appendChild(listLi);
        })

        navColumn.appendChild(blockDiv);
        blockDiv.appendChild(titleDiv);
        blockDiv.appendChild(listUl);}}


export function dashboardRefresh(){
    // let upcomingTaskName = document.getElementById("upcomingTaskName");
    // let upcomingTaskDue = document.getElementById("upcomingTaskDue");
    // let projectListName = document.getElementById("projectListName");
    // let nextProjectListTask = document.getElementById("nextProjectListTask");
    // let clockDay = document.querySelector("#clock.clockDay");
    // let clockMonth = document.querySelector("#clock.clockMonth");
    // let clockYear = document.querySelector("#clock.clockYear");


    updateClock();
    updateDashboard();
}

function updateDashboard(){
    let projectListArea = document.getElementById("projectListArea");
    let upcomingTaskArea = document.getElementById("upcomingTaskArea");

    projectListArea.innerHTML = "";
    upcomingTaskArea.innerHTML = "";

    let tempProjectList = projectList;
    let tempTaskList;

    tempProjectList.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

    tempProjectList.forEach((project)=>{
        const projectBlockDiv = document.createElement("div");
        const projectNameDiv = document.createElement("div");
        const projectNextTaskDiv = document.createElement("div");

        projectBlockDiv.setAttribute("id", "projectListBlock");
        projectBlockDiv.setAttribute("class", "projectListBlock");
        projectNameDiv.setAttribute("id", "projectListName");
        projectNameDiv.setAttribute("class", "projectListName");
        projectNextTaskDiv.setAttribute("id", "nextProjectListTask");
        projectNextTaskDiv.setAttribute("class", "nextProjectListTask");

//Update the project list field and corresponding 'next task' in ui

        projectNameDiv.innerText = projectList[i].name;

        if(project.tasks.length>0){
            projectNextTaskDiv.innerText = projectList[i].tasks.at(-1).name;
        }
        else{
            projectNextTaskDiv.innerText = "No Tasks";
        }


        projectList[i].tasks.forEach((task)=>{
            if(isValid(task.dueDate)){
                console.log(`The dueDate was VALID. Due date = ${task.dueDate}.`);
                tempTaskList.push(task);
            }
        })

        projectBlockDiv.appendChild(projectNameDiv);
        projectBlockDiv.appendChild(projectNextTaskDiv);
        projectListArea.appendChild(projectBlockDiv);

    })

    tempTaskList = sortDates(tempTaskList);

    for(let i = tempTaskList.length-1; i>tempTaskList.length-6; i--){
        const taskBlockDiv = document.createElement("div");
        const taskNameDiv = document.createElement("div");
        const taskDueDiv = document.createElement("div");

        taskBlockDiv.setAttribute("id", "upcomingTaskBlock");
        taskBlockDiv.setAttribute("class", "upcomingTaskBlock");
        taskNameDiv.setAttribute("id", "upcomingTaskName");
        taskNameDiv.setAttribute("class", "upcomingTaskName");
        taskDueDiv.setAttribute("id", "upcomingTaskDue");
        taskDueDiv.setAttribute("class", "upcomingTaskDue");

        taskNameDiv.innerText = tempTaskList[i].name;
        taskDueDiv.innerText = tempTaskList[i].dueDate;
        
        taskBlockDiv.appendChild(taskNameDiv);
        taskBlockDiv.appendChild(taskDueDiv);
        upcomingTaskArea.appendChild(taskBlockDiv);
    }

    }

function sortDates(objectArray){
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < objectArray.length - 1; i++) {
        if (compareDates(objectArray[i].dueDate, objectArray[i + 1].dueDate)) {
          [objectArray[i], objectArray[i + 1]] = [objectArray[i + 1], objectArray[i]];
          swapped = true;
        }
      }
    } while (swapped);
}

function updateClock(){
    let clockDay = document.querySelector("#clock.clockDay");
    let clockMonth = document.querySelector("#clock.clockMonth");
    let clockYear = document.querySelector("#clock.clockYear");

    const date = newDate();

    let day = getDate(date);
    let month = getMonth(date);
    let year = getYear(date);

    clockDay.innerText = day;
    clockYear.innerText = year;

    switch(month){
        case 0:
            clockMonth.innerText = "January";
            break;
        case 1:
            clockMonth.innerText = "February";
            break;
        case 2:
            clockMonth.innerText = "March";
            break;
        case 3:
            clockMonth.innerText = "April";
            break;
        case 4:
            clockMonth.innerText = "May";
            break;
        case 5:
            clockMonth.innerText = "June";
            break;
        case 6:
            clockMonth.innerText = "July";
            break;
        case 7:
            clockMonth.innerText = "August";
            break;
        case 8:
            clockMonth.innerText = "September";
            break;
        case 9:
            clockMonth.innerText = "October";
            break;
        case 10:
            clockMonth.innerText = "November";
            break;
        case 11:
            clockMonth.innerText = "December";
            break;
    }
}
