function timer(id, deadline) {

  function getTimeRamaining(endtime) {
    let days, hours, minutes, seconds;
    let t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / 86400000);
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / (1000 * 60)) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const getZero = (num) => String(num).padStart(2, '0')

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      daysInner = timer.querySelector('#days'),
      hoursInner = timer.querySelector('#hours'),
      minutesInner = timer.querySelector('#minutes'),
      secondsInner = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();


    function updateClock() {
      const { total, days, hours, minutes, seconds } = getTimeRamaining(endtime);

      daysInner.innerHTML = getZero(days);
      hoursInner.innerHTML = getZero(hours);
      minutesInner.innerHTML = getZero(minutes);
      secondsInner.innerHTML = getZero(seconds);

      if (total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(id, deadline);
}

export default timer