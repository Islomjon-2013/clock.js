const hour1 = document.querySelector(".hour");
const minute2 = document.querySelector(".minute");
const secund3 = document.querySelector(".secund");
function uptadeClock() {
  const current = new Date();
  const hour = current.getHours();
  const minute = current.getMinutes();
  const secund = current.getSeconds();
  const hourdegre = (hour / 12) * 360;
  hour1.style.transform = `rotate(${hourdegre}deg)`;
  const minutedegre = (minute / 60) * 360;
  minute2.style.transform = `rotate(${minutedegre}deg)`;
  const secedegre = (secund / 60) * 360;
  secund3.style.transform = `rotate(${secedegre}deg)`;
}
setInterval(uptadeClock, 1000);
