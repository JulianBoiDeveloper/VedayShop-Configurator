//USED
if(step == 1) {
    addWizard();
    placementWizard();
}
if(step != 1 && step <= 5) {
// TEST CHANGE STEP
    changeWizard(step);
    placementWizard();
}