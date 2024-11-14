import {taskList} from "./new-task";
import {projectList} from "./new-project";
import { compareAsc, format, formatDate, isMatch } from "date-fns";

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
        setError(fieldID, "projectExists")
        submitBtn.disabled = true;
        return 0;}
    else{
        clearError();
        submitBtn.disabled = false;
        return 1;}}

//error object to hold task or date keys with associated error arrays. Pairs will be added or modified or deleted from checkTaskInput().
//taskErrors will be checked by checkTaskErrors() and then clearError() will clear errors and enable submit.
export let taskErrors = {};

export function checkTaskErrors(){
    let objLength = Object.keys(taskErrors).length;

    if(objLength == 0){
        clearError();
        submitBtn.disabled = false;
        return 1;
    }
    else{
        let firstError = Object.entries(taskErrors)[0];

        setError(firstError[0], firstError[1]);
        submitBtn.disabled = true;
        return 0;
    }
}

export function checkTaskInput(e){
    let fieldValue = e.currentTarget.value;
    const fieldID = e.currentTarget.id;
    const regex = /(::)/g;
    let checkSym = [...fieldValue.matchAll(regex)];
    let currentDate = formatDate(new Date(), 'yyyy-MM-dd');

    switch (fieldID) {
        case "taskName":
            let nameTrim = fieldValue.trim();
            if(checkSymbol(checkSym) == 0){
                if(checkTaskName(nameTrim, fieldID)){
                    return 1;
                }
                return 0;}
            else  if(checkSymbol(checkSym) == -1){
                setError(fieldID, "symbolLimit")
                taskErrors[fieldID] = "symbolLimit";
                submitBtn.disabled = true;
                return 0;
            }

            
        case "taskDueDate":
            if(compareDates(fieldValue,currentDate) == -1 || compareDates(fieldValue,currentDate) == 0){
                setError(fieldID, "dateInvalid");
                taskErrors[fieldID] = "dateInvalid";
                submitBtn.disabled = true;
                return 0;}

            else{
                clearError();
                delete taskErrors[fieldID];
                submitBtn.disabled = false;
                return 1;}}}

function checkTaskName(nameTrim, fieldID){
        if(checkEmpty(nameTrim)){
            setError(fieldID, "empty");
            taskErrors[fieldID] = "empty";
            submitBtn.disabled = true;
            return 0;}
        else if(checkLength(nameTrim)){
            setError(fieldID, "charLimit")
            taskErrors[fieldID] = "charLimit";
            submitBtn.disabled = true;
        return 0;}
        else{
            clearError();
            delete taskErrors[fieldID];
            submitBtn.disabled = false;
            return 1;}}


function checkLength(nameTrim){
    if (nameTrim.length > 25){
        return 1;}
    else{
        return 0;}}


export function checkEmpty(nameTrim){
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

//Redundant, but date library naming for this didn't make sense to me. 
//Compare the two dates and 
//return 1 if the first date is after the second,
//-1 if the first date is before the second 
//or 0 if dates are equal.
function compareDates(fieldValue, currentDate){
    return compareAsc(fieldValue, currentDate);
}


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
        case "dateIncomplete":
            errorDescription.innerText = "Must complete date field.";
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