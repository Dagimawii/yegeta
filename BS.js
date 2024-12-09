const username = localStorage.getItem("username");
document.getElementById("diplayuser").textContent = `😉 `+username;
function displayTime() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const timeString = now.toLocaleTimeString();
  
    const timeElement = document.getElementById("currentTime");
    timeElement.textContent = `${day} ${timeString} `;
  }
  setInterval(displayTime, 1000);
  displayTime();
  
  
  function check(){
    document.getElementById("programpopup").style.display="block";
  }
  function okay(){
    document.getElementById("programpopup").style.display="none";
  }