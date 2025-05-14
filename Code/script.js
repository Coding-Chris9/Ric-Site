function revealMessage() {
    document.getElementByID("hiddenMessage".style.display = 'block');
    console.log("Hello World");
}
function countDown(){
    var currentVal = document.getElementByID("countDownButton").innerHTML;
    var newVal = currentVal -1 ;
    document.getElementById("countDownButton").innerHTML = newVal; 
    console.log("Hello World");
}