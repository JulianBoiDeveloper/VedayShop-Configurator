
function createButton(operator = ''){
    const button = document.createElement('button');
    if(operator == '+'){

        if(step < 3){
            button.innerHTML = "OFF";
            button.setAttribute('id','buttonON');
            button.setAttribute('class','buttonON');
            button.setAttribute('onclick','switchButtonON('+step+',this)');
            body.appendChild(button);
        }else{

        }
    }else if(operator == '-'){
        if(step > 0){
            button.innerHTML = "OFF";
            button.setAttribute('id','buttonON');
            button.setAttribute('class','buttonON');
            button.setAttribute('onclick','switchButtonON('+step+',this)');
            body.appendChild(button);
        }else{

        }

    }else{
        button.innerHTML = "OFF";
        button.setAttribute('id','buttonON');
        button.setAttribute('class','buttonON');
        button.setAttribute('onclick','switchButtonON('+step+',this)');
        body.appendChild(button);
    }

}
function switchButtonOFF(step,buttonIdON){

    buttonIdON.innerHTML = "OFF";
    buttonIdON.setAttribute('id','buttonOFF');
    buttonIdON.setAttribute('class','buttonON_'+step);
    buttonIdON.setAttribute('onclick','switchButtonON('+step+',this)');
    stepValidated();
}

function switchButtonON(step,buttonIdOFF){
    buttonIdOFF.innerHTML = "ON";
    buttonIdOFF.setAttribute('class','buttonON_'+step);
    buttonIdOFF.setAttribute('onclick','switchButtonOFF('+step+',this)');
    stepValidated();
}

function deleteButtonON_OFF(){
    const buttonIdON = document.getElementById('buttonON');
    const buttonIdOFF = document.getElementById('buttonOFF');
    if(buttonIdON != null) {
        body.removeChild(buttonIdON);
    }
    if(buttonIdOFF != null) {
        body.removeChild(buttonIdOFF);
    }
}


