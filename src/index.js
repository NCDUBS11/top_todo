import "./styles.css";
import newTask from "./new-task";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
};

const newTaskBtn = document.getElementById("newTask")

newTaskBtn.addEventListener("click", ()=>{
    newTask();
});