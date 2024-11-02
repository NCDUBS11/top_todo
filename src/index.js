import "./styles.css";
import newTask from "./new-task";
import newProject from "./new-project";
import { compareAsc, format, formatDistance, formatDistanceToNow } from "date-fns";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
};

const newTaskBtn = document.getElementById("newTask");
const newProjectBtn = document.getElementById("newProject");

let projectList = [];

newTaskBtn.addEventListener("click", ()=>{
    newTask();
});

newProjectBtn.addEventListener("click", ()=>{
    newProject();
});