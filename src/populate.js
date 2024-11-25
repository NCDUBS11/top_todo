import {projectList} from "./new-project";
import {compareDates} from "./validate";


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
    let upcomingTaskName = document.getElementById("upcomingTaskName");
    let upcomingTaskDue = document.getElementById("upcomingTaskDue");
    let projectListName = document.getElementById("projectListName");
    let nextProjectListTask = document.getElementById("nextProjectListTask");
    let clockDay = document.querySelector("#clock.clockDay");
    let clockMonth = document.querySelector("#clock.clockMonth");
    let clockYear = document.querySelector("#clock.clockYear");


    updateClock();
    updateDashboard();
}

function updateDashboard(){
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
        projectNameDiv.setAttribute("id", "projectTitle");
        projectNameDiv.setAttribute("class", "projectTitle");
        projectNextTaskDiv.setAttribute("id", "projectListInfo");
        projectNextTaskDiv.setAttribute("class", "projectListInfo");

//Update the project list field and corresponding 'next task' in ui

        projectNameDiv.innerText = projectList[i].name;

        if(project.tasks.length>0){
            projectNextTaskDiv.innerText = projectList[i].tasks.at(-1).name;
        }
        else{
            projectNextTaskDiv.innerText = "No Tasks";
        }


        projectList[i].tasks.forEach((task)=>{
            if(task.dueDate){
                tempTaskList.push(task);
            }
        })

        navColumn.appendChild(projectBlockDiv);
        projectBlockDiv.appendChild(projectNameDiv);
        projectBlockDiv.appendChild(projectNextTaskDiv);
    })

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
