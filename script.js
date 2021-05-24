var bananas = 0;
var click = 1;
function increment(){
	bananas = bananas + click;
	document.getElementById("counter").innerHTML = bananas;
} 
function upgrade(){
  if (click < 2){
    if (bananas < 100){
      window.alert("not enough bananas, my g")
    }
    
    if (bananas > 100){
      window.confirm("you sure, broski?")
      bananas = bananas - 100;
      document.getElementById("counter").innerHTML = bananas;
      document.getElementById("curclickpwr").innerHTML = "2"
      document.getElementById("nextclickpwr").innerHTML =
      "5"
      document.getElementById("nextclickcost").innerHTML = "1000"
      click = 2;
    }
  }
}
