// variable "bananas" is the amount of bananas that have been harvested (is shown in <span> element next to "Bananas:")
// variable "click" is the power that one click will get you (by "power" I mean like how many bananas harvested)
// variable "autoclickPower" is how many bananas are harvested per second
var bananas = 0;
var click = 1;
var autoclickPower = 0;
// don't name a function click() because it's reserved (for something else in JS). I learned that the hard way
function increment(){
	bananas = bananas + click;
	document.getElementById("counter").innerHTML = bananas;
  document.getElementById("topcounter").innerHTML = bananas + " Bananas - Banana Clicker";
}
// this function is click upgrades, I didn't make it clear when I named the function
function upgrade(){
  // make sure when comparing for equal to use "=="
  if (click == 1){
    if (bananas >= 100){
      bananas = bananas - 100;
      // everything below changes <span> elements under the click upgrades button
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
function upgradeAutoclick(){
  if (autoclickPower == 0){
    if (bananas >= 100){
      bananas = bananas - 100;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curautoclick").innerHTML = "1";
      document.getElementById("nextautoclick").innerHTML =
      "5";
      document.getElementById("nextautoclickcost").innerHTML = "500";
      // Don't ever use "==" when setting a variable again!
      autoclickPower = 1;
    }
  }
  if (autoclickPower == 1){
    if (bananas >= 500){
      bananas = bananas - 500;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curautoclick").innerHTML = "5";
      document.getElementById("nextautoclick").innerHTML =
      "10";
      document.getElementById("nextautoclickcost").innerHTML = "1050";
      autoclickPower = 5;
    }
  }
}
function myFunction() {
  setInterval(function(){ bananas = bananas + autoclickPower; document.getElementById("counter").innerHTML = bananas; document.getElementById("topcounter").innerHTML = bananas + " Bananas - Banana Clicker"; }, 1000);
}
// call this in the javascript console by pressing F12 and clicking on console and typing "dev();"
function dev() {
  bananas = bananas + 100000000000000000;
}
function achievements() {
  setInterval(function(){
    if (bananas == 1){
      var achievement1 = localStorage.getItem('achievement1') || '';
      if (achievement1 != 'yes') {
        alert("Achievement Unlocked: Baby Steps");
        localStorage.setItem('achievement1','yes');
      }
    }
    if (bananas == 10){
      var achievement2 = localStorage.getItem('achievement2') || '';
      if (achievement2 != 'yes') {
        alert("Achievement Unlocked: It's Something");
        localStorage.setItem('achievement2','yes');
      }
    }
    if (bananas == 50){
      var achievement3 = localStorage.getItem('achievement3') || '';
      if (achievement3 != 'yes') {
        alert("Achievement Unlocked: Halfway to Triple Digits");
        localStorage.setItem('achievement3','yes');
      }
    }
    if (bananas == 69){
      var achievement4 = localStorage.getItem('achievement4') || '';
      if (achievement4 != 'yes') {
        alert("Achievement Unlocked: haha funny number");
        localStorage.setItem('achievement4','yes');
      }
    }
    if (bananas == 100){
      var achievement5 = localStorage.getItem('achievement5') || '';
      if (achievement5 != 'yes') {
        alert("Achievement Unlocked: Triple Digits");
        localStorage.setItem('achievement5','yes');
      }
    }
    if (bananas <= 1000 && click == 2 && autoclickPower == 0){
      var achievement6 = localStorage.getItem('achievement6') || '';
      if (achievement6 != 'yes'){
        alert("Achievement Unlocked: Taking the Shortcut");
        localStorage.setItem('achievement6', 'yes');
      }
    }
    if (bananas <= 1000 && click == 1 && autoclickPower == 1){
      var achievement7 = localStorage.getItem('achievement7') || '';
      if (achievement7 != 'yes'){
        alert("Achievement Unlocked: Taking the Scenic Route");
        localStorage.setItem('achievement7', 'yes');
      }
    }
    if (click == 5 && autoclickPower == 5){
      var achievement8 = localStorage.getItem('achievement8') || '';
      if (achievement8 != 'yes'){
        alert("Achievement Unlocked: Let's Count by 5s!");
        localStorage.setItem('achievement8', 'yes');
      }
    }
  }, 5);
}
function deleteAllCookies() {
  localStorage.clear();
}
