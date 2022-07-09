// Set video speed
document.querySelector('video').playbackRate = 1.25;

// Get the time and update the relevant HTML element
/*
function setTime() {
    var today = new Date();
    var nameOfDay = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
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

// Update the time every second
setTimeout(setTime, 1000);
//setInterval(setTime, 1000);
*/

setInterval( () => {
    document.getElementById("timeInner").innerHTML = new Date().toLocaleString();
}, 1000);

