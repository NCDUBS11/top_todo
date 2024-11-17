import {projectList} from "./new-project";


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
