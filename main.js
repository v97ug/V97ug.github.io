function showSlider(){
  var sliderValue = document.getElementById("slider").value;
  // alert("スライダーの値:" + sliderValue);
  alert("トゲデマルからプレゼントをもらった！")
}

function clock(){
  var now = new Date();

  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min
  if (sec < 10) sec = "0" + sec

  var timeElement = document.getElementById("time");
  timeElement.innerHTML = hour + ":" + min + ":" + sec;

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var weekArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var week = weekArray[now.getDay()];
  var dateElement = document.getElementById("date");
  dateElement.innerHTML = year + "/" + month + "/" + day + " " + week;

  setTimeout("clock()",1000);
}
