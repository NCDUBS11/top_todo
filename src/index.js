import "./styles.css";
import newTask from "./new-task";
import { getData, newProject, clearAll } from "./new-project";
import dashboardLoad from "./dashboard";
import * as populate from "./populate";
import { compareAsc, format, formatDistance, formatDistanceToNow } from "date-fns";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
};

const newTaskBtn = document.getElementById("newTask");
const newProjectBtn = document.getElementById("newProject");
const homeBtn = document.querySelector("#navItem.home");
const trashBtn = document.getElementById("trashCan");


onload = () => {
    getData();

    populate.navColumnRefresh();
    dashboardLoad();
};


homeBtn.addEventListener("click", ()=>{
    dashboardLoad();
});

trashBtn.addEventListener("click", ()=>{
    clearAll();
});

newTaskBtn.addEventListener("click", ()=>{
    newTask();
});

newProjectBtn.addEventListener("click", ()=>{
    newProject();
});


