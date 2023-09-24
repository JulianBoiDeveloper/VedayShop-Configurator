const body = document.body;
function upTextFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function upText(string){
    return string.toUpperCase();
}
function lowText(string){
    return string.toLowerCase();
}
function changeStep(stepCurrent,operator){
    if(operator == "+" && operator >= 1)
        return stepCurrent + 1;
    if(operator == "-" && operator <= 6)
        return stepCurrent - 1;
}
function changeErrorLevel(level){
    errorLevel = level;
}
