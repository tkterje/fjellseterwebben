$(document).ready(function() {
  // Date of next race
  var raceTime = new Date("April 11, 2018 18:00:00").getTime();

  // Degrees to turn the dials
  var degrees = 0;

  // Sets to current each interval, for clockface to turn on change
  var previousDays = -1;
  var previousHours = -1;
  var previousMinutes = -1;
  var previousSeconds = -1;

  countdownLoop();
  setInterval(countdownLoop, 1000);

  // Interval runs every second (1000ms)

  function clickDisplay(event) {
    rotateDisplay(event.srcElement);
  }

  function countdownLoop() {

    // Finds now-time to get differance from race time
    var now = new Date().getTime();
    var difference = raceTime - now;

    // Calculates the different components of the countdown timer
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Finds the different countdown elements in the DOM
    var daysDisplay = document.getElementById("daysDisplay");
    var hoursDisplay = document.getElementById("hoursDisplay");
    var minutesDisplay = document.getElementById("minutesDisplay");
    var secondsDisplay = document.getElementById("secondsDisplay");

    daysDisplay.addEventListener("click", clickDisplay)
    hoursDisplay.addEventListener("click", clickDisplay)
    minutesDisplay.addEventListener("click", clickDisplay)
    secondsDisplay.addEventListener("click", clickDisplay)

    // Stops the interval when race started, probably not necessary...
    if(difference <= 0) {
      clearInterval(interval);
    } else {

      // If day or hour plural, add s to ending
      var dayText = (days == 1) ? "dag" : "dager";
      var hourText = (hours == 1) ? "time" : "timer";

      // Sets the text of the components with a delay to fit with the animation
      setTimeout(function(){
        daysDisplay.innerHTML = days + "<br/>" + dayText;
        hoursDisplay.innerHTML = hours + "<br/>" + hourText;
        minutesDisplay.innerHTML = minutes + "<br/>min";
        secondsDisplay.innerHTML = seconds + "<br/>sek";
      }, 300);

      // Rotates components 360 degrees if different from previous round
      degrees -= 360;
      if(days !== previousDays) { rotateDisplay(daysDisplay); }
      if(hours !== previousHours) { rotateDisplay(hoursDisplay); }
      if(minutes !== previousMinutes) { rotateDisplay(minutesDisplay); }
      if(seconds !== previousSeconds) { rotateDisplay(secondsDisplay); }
    }

    // Sets previous to current for next interval
    previousDays = days;
    previousHours = hours;
    previousMinutes = minutes;
    previousSeconds = seconds;

  }

  function rotateDisplay(display) {
    display.style.webkitTransform = 'rotateX(' + degrees + 'deg)';
    display.style.mozTransform    = 'rotateX(' + degrees + 'deg)';
    display.style.msTransform     = 'rotateX(' + degrees + 'deg)';
    display.style.oTransform      = 'rotateX(' + degrees + 'deg)';
    display.style.transform       = 'rotateX(' + degrees + 'deg)';

    // Resets rotation every round for a smoother transform
    // The best way I found to do it. Adds class that removes
    // transitions, resets, and removes the class again.
    if(degrees < -360) {
      setTimeout(function() {
        display.classList.add("notransition");
        display.style.webkitTransform = "rotateX(0deg)";
        degrees = 0;

        setTimeout(function() {
          display.classList.remove("notransition");
        }, 10);
      }, 800);
    }
  }
});
