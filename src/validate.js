import {taskList} from "./new-task";
import {projectList} from "./new-project";

export function checkProjectInput(e){
    let fieldValue = e.currentTarget.value;
    const fieldID = e.currentTarget.id;
    let nameTrim = fieldValue.trim();
    let cleanName = nameTrim.toLowerCase();
    const regex = /(::)/g;
    let checkSym = [...fieldValue.matchAll(regex)];

    if(checkSymbol(checkSym) != 0){
        setError(fieldID, "symbolInvalid")
        submitBtn.disabled = true;
        return 0;}
    else if(checkEmpty(nameTrim)){
        setError(fieldID, "empty");
        submitBtn.disabled = true;
        return 0;}
    else if(checkLength(nameTrim)){
        setError(fieldID, "charLimit")
        submitBtn.disabled = true;
        return 0;}
    else if(checkExisting(cleanName)){
        setError(fieldID, "projectExists");
        return 0;}
    else{
        clearError();
        submitBtn.disabled = false;
        return 1;}}


function checkLength(nameTrim){
    if (nameTrim.length > 25){
        return 1;}
    else{
        return 0;}}


function checkEmpty(nameTrim){
    if(nameTrim != ""){
        return 0;}
    else{
        return 1;}}


function checkSymbol(checkSym){
        if(checkSym.length == 0){
            return 0;}
        else if(checkSym.length == 1){
            return 1;}
        else{
            return -1;}}


function checkExisting(cleanName){
    for(let i = 0; i<projectList.length; i++){
        if(cleanName == projectList[i].name.trim().toLowerCase()){
            return 1;}} 
    return 0;}


export function setError(elementID, errorType){

    const errorElement = document.getElementById(elementID).parentNode.querySelector("#error");
    errorElement.style.display="block";
    errorDescription.style.display="block";

    switch (errorType) {
        case "empty":
            errorDescription.innerText = "Field can't be empty!";
            break;
        case "symbolInvalid":
            errorDescription.innerText = "Can't use '::' in name.";
            break;
        case "symbolLimit":
            errorDescription.innerText = "Can only use '::' once";
            break;
        case "projectEmpty":
            errorDescription.innerText = "'::' requires a project name.";
            break;
        case "charLimit":
            errorDescription.innerText = "There is a 25 character limit.";
            break;
        case "dateInvalid":
            errorDescription.innerText = "Must provide future date.";
            break;
        case "projectExists":
            errorDescription.innerText = "Title already in use.";
            break;
        default:
            errorDescription.innerText = "Invalid argument used."; 
            break;}
    return;}


export function clearError(){
    const errors = document.querySelectorAll("#error");
    errors.forEach(error => {error.style.display="none";});
    errorDescription.style.display="none";
    return 1;}