// DECLARATIONS
const errorId = document.createElement('div');
// ACTION
function createError(message) {
// ADD ATTRIBUTES
    if(errorLevel == "DEBUG"){
        errorId.setAttribute('id','error');
        errorId.setAttribute('class','errors debugError');
        getTextError(message);
    }
    if(errorLevel == "INFO"){
        errorId.setAttribute('id','error');
        errorId.setAttribute('class','errors infosError');
        getTextError(message);
    }
    if(errorLevel == "WARN"){
        errorId.setAttribute('id','error');
        errorId.setAttribute('class','errors warnError');
        getTextError(message);
    }
    if(errorLevel == "ERROR"){
        errorId.setAttribute('id','error');
        errorId.setAttribute('class','errors errorError');
        getTextError(message);
    }
}
function getTextError(key){
    if(errorLevel == "DEBUG") {
        errorId.innerHTML = debug_ERROR.get(key);
    }
    if(errorLevel == "INFO") {
        errorId.innerHTML = info_ERROR.get(key);
    }
    if(errorLevel == "WARN") {
        errorId.innerHTML = warn_ERROR.get(key);
    }
    if(errorLevel == "ERROR") {
        errorId.innerHTML = error_ERROR.get(key);
    }
}
function getError(message,errorLevel){
    changeErrorLevel(errorLevel);
    createError(message);
    body.append(errorId);
    wizardId.after(errorId);
}

function deleteError(){
    body.removeChild(errorId);
}

//USED
// TEST ERREUR OU Y'A RIEN
//getError('nothing','DEBUG');
//deleteError();
