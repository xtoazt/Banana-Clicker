var bananas = 0;
var click = 1;
function increment(){
	bananas = bananas + click;
	document.getElementById("counter").innerHTML = bananas;
} 
function upgrade(){
  if (click == 1){
      if (bananas > 100){
        bananas = bananas - 100;
        document.getElementById("counter").innerHTML = bananas;
        document.getElementById("curclickpwr").innerHTML = "2";
        document.getElementById("nextclickpwr").innerHTML = "5";
        document.getElementById("nextclickcost").innerHTML = "1000";
        click = 2;
      }
    }
  }
  if (click == 2){
    if (bananas > 1000){
      bananas = bananas - 1000;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "5";
      document.getElementById("nextclickpwr").innerHTML = "10";
      document.getElementById("nextclickcost").innerHTML = "2500";
      click = 5;
    }
  }
  if (click == 5){
    if (bananas > 2500){
      bananas = bananas - 2500;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "10";
      document.getElementById("nextclickpwr").innerHTML = "20";
      document.getElementById("nextclickcost").innerHTML = "5500";
      click = 10;
    }
  }
  if (click == 10){
    if (bananas > 5500){
      bananas = bananas - 2500;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "10";
      document.getElementById("nextclickpwr").innerHTML = "20";
      document.getElementById("nextclickcost").innerHTML = "5500";
      click = 10;
    }
  }
