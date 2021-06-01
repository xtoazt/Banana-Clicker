var bananas = 0;
var click = 1;
var autoclickPower = 0;
function increment(){
	bananas = bananas + click;
	document.getElementById("counter").innerHTML = bananas;
}

function upgrade(){
  if (click == 1){
    if (bananas >= 100){
      bananas = bananas - 100;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "2";
      document.getElementById("nextclickpwr").innerHTML = "5";
      document.getElementById("nextclickcost").innerHTML = "500";
      click = 2;
    }
  }

  if (click == 2){
    if (bananas >= 500){
      bananas = bananas - 500;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "5";
      document.getElementById("nextclickpwr").innerHTML = "10";
      document.getElementById("nextclickcost").innerHTML = "2500";
      click = 5;
    }
  }

  if (click == 5){
    if (bananas >= 2500){
      bananas = bananas - 2500;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "10";
      document.getElementById("nextclickpwr").innerHTML = "20";
      document.getElementById("nextclickcost").innerHTML = "5500";
      click = 10;
    }
  }

  if (click == 10){
    if (bananas >= 5500){
      bananas = bananas - 5500;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "20";
      document.getElementById("nextclickpwr").innerHTML = "50";
      document.getElementById("nextclickcost").innerHTML = "10000";
      click = 20;
    }
  }

  if (click == 20){
    if (bananas >= 10000){
      bananas = bananas - 10000;
      document.getElementById("counter").innerHTML = 
      bananas;
      document.getElementById("curclickpwr").innerHTML = 
      "50";
      document.getElementById("nextclickpwr").innerHTML = 
      "100";
      document.getElementById("nextclickcost").innerHTML = "25000";
      click = 50;
    }
  }

  if (click == 50){
    if (bananas >= 25000){
      bananas = bananas - 25000;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = 
      "100";
      document.getElementById("nextclickpwr").innerHTML = 
      "200";
      document.getElementById("nextclickcost").innerHTML = "50000";
      click = 100;
    }
  }

  if (click == 100){
    if (bananas >= 50000){
      bananas = bananas - 50000;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = 
      "200";
      document.getElementById("nextclickpwr").innerHTML = 
      "400";
      document.getElementById("nextclickcost").innerHTML = "69420";
      click = 200;
    }
  }

  if (click == 200){
    if (bananas >= 69420){
      bananas = bananas - 69420;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = 
      "400";
      document.getElementById("nextclickpwr").innerHTML = 
      "1000";
      document.getElementById("nextclickcost").innerHTML = "400000";
      click = 400;
    }
  }

  if (click == 400){
    if (bananas >= 180000){
      bananas = bananas - 25000;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = 
      "1000";
      document.getElementById("nextclickpwr").innerHTML = 
      "???";
      document.getElementById("nextclickcost").innerHTML = "???";
      click = 1000;
    }
  }
}
