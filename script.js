var bananas = 0;
var click = 1;
var frick = ["you don't have cash money broski", "you have low cash money", "not enough cash money dude", "your cash money account is too dry"]
// var autoclick = 0;
function random_item(frick)
{
  
return frick[Math.floor(Math.random()*frick.length)];
     
}
function increment(){
	bananas = bananas + click;
	document.getElementById("counter").innerHTML = bananas;
} 
function upgrade(){
  if (click < 2){
    if (bananas < 100){
      window.alert(random_item(frick))
    }
    
    if (bananas > 100){
      // window.confirm("you sure, broski?")
      bananas = bananas - 100;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "2"
      document.getElementById("nextclickpwr").innerHTML =
      "5"
      document.getElementById("nextclickcost").innerHTML = "1000"
      click = 2;
    }
  }
  if (click > 2){
    if (click < 5){
      if (bananas < 1000){
        window.alert(random_item(frick))
      }
    }
  }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
/* function autoclick(){
  while (true){
    sleep(1000);
    bananas = bananas + autoclick;
    document.getElementById("counter").innerHTML = bananas;
  }
}
function upgradeAutoclick(){
  if (bananas < 100){
    window.alert("no cash money my dude");
  }
  if (bananas > 100){
    autoclick = 1;
    bananas = bananas - 100;
    document.getElementById("counter").innerHTML = bananas;
    document.getElementById("curbps").innerHTML = "1";
    document.getElementById("nextbps").innerHTML = "5";
    document.getElementById("nextbpscost").innerHTML = "1000";
  }
}
function autoclickmult(){
  autoclick();
  upgradeAutoclick();
} */
