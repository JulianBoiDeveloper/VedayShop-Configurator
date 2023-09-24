
function stepValidated(){
    if(options['option'+step] == 0){
        options['option'+step] = 1;
    }else{
        options['option'+step] = 0;
    }
}
function changeStep(operator){
    if(operator == '+'){
        if(step < 3){
            if(options['option'+step] == 1){
                step = step+1;
                deleteWizard();
                changeWizard(step);
                placementWizard();
                createButton();
                deleteButtonON_OFF();
                deleteButton();
                showButton();
            }
        }else{
            deleteButtonON_OFF();
            deleteButton();
        }
    }
    if(operator == '-'){
        if(step > 1){
            console.log("step > 1");
            step = step-1;
            options['option'+step] = 0;
            deleteWizard();
            changeWizard(step);
            placementWizard();
            createButton();
            deleteButtonON_OFF();
            deleteButton();
            showButton();
        }
    }
}
function showButton(){
    const nextButton = document.createElement('button');
    const beforeButton = document.createElement('button');
    if(step == 1){
        // Bouton suivant
        nextButton.innerHTML = "Suivant";
        nextButton.setAttribute('id','nextButton');
        nextButton.setAttribute('class','nextButton');
        nextButton.setAttribute('onclick','changeStep("+")');
        body.appendChild(nextButton);
    }
    if(step <= 5 && step != 1){
        // Bouton précedent
        beforeButton.innerHTML = "Précédent";
        nextButton.innerHTML = "Suivant";
        nextButton.setAttribute('id','nextButton');
        nextButton.setAttribute('class','nextButton');
        nextButton.setAttribute('onclick','changeStep("+")');
        beforeButton.setAttribute('id','beforeButton');
        beforeButton.setAttribute('class','beforeButton');
        beforeButton.setAttribute('onclick','changeStep("-")');
        body.appendChild(beforeButton);
        body.appendChild(nextButton);
    }
}
function deleteButton(){

    const nextButtonId = document.getElementById('nextButton');
    const beforeButtonId = document.getElementById('beforeButton');
    if(beforeButtonId != null){
        body.removeChild(beforeButtonId);
    }
    body.removeChild(nextButtonId);
}