// DECLARATIONS
const wizardId = document.createElement('div');


function addWizard(){
    // ADD ATTRIBUTES
    wizardId.setAttribute('id','wizard');
    wizardId.setAttribute('class','wizards');
    wizardId.innerHTML = "<b>1 - "+upTextFirst(translate('stepsService'))+"</b> / 2- "+upTextFirst(translate('stepsSleeve'))+" / 3- "+upTextFirst(translate('stepsUpgrades'))+" / 4- "+upTextFirst(translate('stepsCables'))+" / 5- "+upTextFirst(translate('stepsColors'))+" / 6- "+upTextFirst(translate('stepsAdditional'))+"";
}
function placementWizard(){
    body.appendChild(wizardId);
    headerId.after(wizardId);
}
function changeWizard (step){
    switch (step) {
        case 1:
            wizardId.innerHTML = "<b>1 - "+upTextFirst(translate('stepsService'))+"</b> / 2- "+upTextFirst(translate('stepsSleeve'))+" / 3- "+upTextFirst(translate('stepsUpgrades'))+" / 4- "+upTextFirst(translate('stepsCables'))+" / 5- "+upTextFirst(translate('stepsColors'))+" / 6- "+upTextFirst(translate('stepsAdditional'))+"";
            break;
        case 2:
            wizardId.innerHTML = "1 - "+upTextFirst(translate('stepsService'))+" / <b>2- "+upTextFirst(translate('stepsSleeve'))+"</b>  / 3- "+upTextFirst(translate('stepsUpgrades'))+" / 4- "+upTextFirst(translate('stepsCables'))+" / 5- "+upTextFirst(translate('stepsColors'))+" / 6- "+upTextFirst(translate('stepsAdditional'))+"";
            break;
        case 3:
            wizardId.innerHTML= "1 - "+upTextFirst(translate('stepsService'))+" / 2- "+upTextFirst(translate('stepsSleeve'))+"  / <b>3- "+upTextFirst(translate('stepsUpgrades'))+"</b> / 4- "+upTextFirst(translate('stepsCables'))+" / 5- "+upTextFirst(translate('stepsColors'))+" / 6- "+upTextFirst(translate('stepsAdditional'))+"";
            break;
        case 4:
            wizardId.innerHTML = "1 - "+upTextFirst(translate('stepsService'))+" / 2- "+upTextFirst(translate('stepsSleeve'))+"  / 3- "+upTextFirst(translate('stepsUpgrades'))+" / <b>4- "+upTextFirst(translate('stepsCables'))+"</b> / 5- "+upTextFirst(translate('stepsColors'))+" / 6- "+upTextFirst(translate('stepsAdditional'))+"";
            break;
        case 5:
            wizardId.innerHTML = "1 - "+upTextFirst(translate('stepsService'))+" / 2- "+upTextFirst(translate('stepsSleeve'))+"  / 3- "+upTextFirst(translate('stepsUpgrades'))+" / 4- "+upTextFirst(translate('stepsCables'))+" / <b> 5- "+upTextFirst(translate('stepsColors'))+"</b>/ 6- "+upTextFirst(translate('stepsAdditional'))+"";
            break;
        case 6:
            wizardId.innerHTML =  "1 - "+upTextFirst(translate('stepsService'))+" / 2- "+upTextFirst(translate('stepsSleeve'))+"  / 3- "+upTextFirst(translate('stepsUpgrades'))+" / 4- "+upTextFirst(translate('stepsCables'))+" / 5- "+upTextFirst(translate('stepsService'))+" / <b>6- "+upTextFirst(translate('stepsAdditional'))+"</b>";
            break;
        default:
            break;
    }
    body.prepend(wizardId);
}
function deleteWizard(){
    body.removeChild(wizardId);
}

