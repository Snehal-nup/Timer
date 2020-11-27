var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("second");

var startTimer = null;

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}
function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener("click", function () {
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});

reset.addEventListener("click", function () {
  h.value = "00";
  m.value = "00";
  s.value = "00";
  stopTimer();
});

function stopp() {
  clearInterval(startTimer);
}
stop.addEventListener("click", function () {
  stopp();
});
