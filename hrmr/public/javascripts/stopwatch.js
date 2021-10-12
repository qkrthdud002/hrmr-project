var stopFullRecord = document.getElementById("stop-full-record");
var minutes = 00;
var seconds = 00;
var mseconds = 00;
var minutesText = document.getElementById("minutes");
var secondsText = document.getElementById("seconds");
var msecondsText = document.getElementById("mseconds");
var btnStart = document.getElementById('btnStart');
var btnStop = document.getElementById('btnStop');
var btnReset = document.getElementById('btnReset');
var recordUl = document.getElementById('stop-record');
var Interval; 
 
btnStart.addEventListener('click', function() {
    clearInterval(Interval);
    alert('Timer Start');
    Interval = setInterval(startTimer, 10);
});
 
btnStop.onclick = function() {
    clearInterval(Interval);
    createRecord();
};
 
btnReset.onclick = function() {
    clearInterval(Interval);
    alert('Timer Reset');
    mseconds = "00";
    seconds = "00";
    msecondsText.innerHTML = mseconds;
    secondsText.innerHTML = seconds;
    recordUl.innerHTML = "";
};
 
function createRecord() {
    var node = document.createElement("li");
    var record = stopFullRecord.textContent;
    var textnode = document.createTextNode(record);        
    node.appendChild(textnode);                             
    recordUl.appendChild(node); 
}
 
function startTimer () {
    mseconds++; 
    if(mseconds < 9){
        msecondsText.innerHTML = "0" + mseconds;
    }
    if (mseconds > 9){
        msecondsText.innerHTML = mseconds;
    } 
    if (mseconds > 99) {
        seconds++;
        secondsText.innerHTML = "0" + seconds;
        mseconds = 0;
        mseconds.innerHTML = "0" + 0;
    }
    if (seconds > 9){
        secondsText.innerHTML = seconds;
    }
    if (seconds > 59){
        minutes++;
        minutesText.innerHTML = "0" + minutesText;
        seconds = 0;
        seconds.innerHTML = "0" + 0;
    }    
}