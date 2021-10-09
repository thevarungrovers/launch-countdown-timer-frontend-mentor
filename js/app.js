// variables
var days = document.querySelector('#days');
var hours = document.querySelector('#hours');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');

// date object
var d = new Date();

var currentYear = d.getFullYear();
var nextYear = 'Jan 1, ' + (currentYear + 1).toString() + ' 00:00:00'

setInterval(timer, 1000);

var nextYear = new Date(nextYear).getTime();

function timer(){
    var now = new Date().getTime();
    var distance = nextYear - now;

    var leftDays = Math.floor(distance / (24 * 60 * 60 * 1000));
    if(leftDays < 10){
        leftDays = '0' + leftDays.toString();
    }

    var leftHours = Math.floor((distance % (24 * 60 * 60 * 1000) / (60 * 60* 1000)));
    if(leftHours < 10){
        leftHours = '0' + leftHours.toString();
    }

    var leftMinutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    if(leftMinutes < 10){
        leftMinutes = '0' + leftMinutes.toString();
    }

    var leftSeconds = Math.floor((distance % (60 * 1000)) / 1000);
    if(leftSeconds < 10){
        leftSeconds = '0' + leftSeconds.toString();
    }
    
    days.innerHTML = leftDays;
    hours.innerHTML = leftHours;
    minutes.innerHTML = leftMinutes;
    seconds.innerHTML = leftSeconds;
}