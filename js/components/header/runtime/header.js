// DECLARATIONS
const headerId = document.createElement('div');
// ACTION
function createHeader(){
    const headerTitlePrimaryId = document.createElement("h1");
    const pContentPrimary1 = document.createElement("p");
    const pContentPrimary2 = document.createElement("p");
    const pContentPrimary3 = document.createElement("p");
    const pContentPrimary4 = document.createElement("h2");
// ADD ATTRIBUTES
    headerId.setAttribute('id','header');
    headerId.setAttribute('class','headers');
    headerTitlePrimaryId.setAttribute('id','headerTitlePrimaryId');
    headerTitlePrimaryId.setAttribute('class','headerTitlePrimaries');
    pContentPrimary1.setAttribute('id','pContentPrimary1Id');
    pContentPrimary1.setAttribute('class','pContentPrimary1s');
    pContentPrimary2.setAttribute('id','pContentPrimary2Id');
    pContentPrimary2.setAttribute('class','pContentPrimary2s');
    pContentPrimary3.setAttribute('id','pContentPrimary3Id');
    pContentPrimary3.setAttribute('class','pContentPrimary3s');
    pContentPrimary4.setAttribute('id','titlePrimaryId');
    pContentPrimary4.setAttribute('class','titlePrimaries');

// ADD TEXT CONTENT

    headerTitlePrimaryId.innerHTML = upTextFirst(translate('titlePrimary'));
    pContentPrimary1.innerHTML = upTextFirst(translate('contentPrimary1'));
    pContentPrimary2.innerHTML = upTextFirst(translate('contentPrimary2'));
    pContentPrimary3.innerHTML = upTextFirst(translate('contentPrimary3'));
    pContentPrimary4.innerHTML = upTextFirst(translate('titleSecondary'));

// ADD ELEMENTS
    headerId.append(headerTitlePrimaryId);
    headerId.appendChild(pContentPrimary1);
    headerId.appendChild(pContentPrimary2);
    headerId.appendChild(pContentPrimary3);
    headerId.appendChild(pContentPrimary4);
}
function placementHeader(){
    body.prepend(headerId);
}

function deleteHeader(){
    body.removeChild(headerId);
}