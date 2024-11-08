
export function clearError(){
    const errors = document.querySelectorAll("#error");
    errors.forEach(error => {
        error.style.display="none";
    });
    errorDescription.style.display="none";
    return 1;
}


export function checkName(name){
    let cleanName = name.trim();
    if(cleanName.length > 0 && cleanName.length < 24){
        return true;
    }
    else{
        return false;
    }
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
            errorDescription.innerText = "There is a 23 character limit.";
            break;
        case "dateInvalid":
            errorDescription.innerText = "Must provide future date.";
            break;
        case "projectExists":
            errorDescription.innerText = "Title already in use.";
            break;
        default:
            errorDescription.innerText = "game is broke, call santa"; 
            break; 
      }
    return;
}