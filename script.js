function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const time = now.getUTCHours() + ":" + now.getUTCMinutes() + " UTC";

  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
  document.querySelector('[data-testid="currentUTCTime"]').textContent = time;
}

// Update the date and time every minute
setInterval(updateDateTime, 60000);

// Call the function initially
updateDateTime();
