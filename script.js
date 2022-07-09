function setTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if(minute >= 0 && minute <= 9){
        minute = '0' + minute;
    } else {
        minute = minute;
    }
    var time = hour + ":" + minute;
    document.getElementById("timeInner").innerHTML = time;
}
setTimeout(setTime, 1000);
//setInterval(setTime, 1000);