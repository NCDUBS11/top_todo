
export function clearError(){
    const errors = document.querySelectorAll("#error");
    errors.forEach(error => {
        error.style.display="none";
        return 1;
    });
}


export function checkProjectName(name){
    let cleanName = name.trim().length;
    if(cleanName > 0 && cleanName < 24){
        return true;
    }
    else{
        return false;
    }
}

export function setError(element, type){
    document.getElementById(element).style.display="block";
    switch (type) {
        case "empty":
            errorDescription.innerText = "Field can't be empty!";
            break;
        case "symbolInvalid":
            errorDescription.innerText = "Don't use '::' when naming projects.";
            break;
        case "symbolLimit":
            errorDescription.innerText = "Can only use '::' once";
            break;
        case "projectEmpty":
            errorDescription.innerText = "Must give project name if using '::'.";
            break;
        case "charLimit":
            errorDescription.innerText = "There is a 23 character limit.";
            break;
        case "dateInvalid":
            errorDescription.innerText = "That date has already passed!";
            break;
        default:
            errorDescription.innerText = "game is broke, call santa"; 
            break; 
      }
    return;
}