
function step2() {
document.querySelector('.sectionss').classList.remove('sectionss');
}

function goback1() {
document.querySelector(".section1").classList.add('sectionss');
document.querySelector(".section2").classList.add('sectionss');
document.querySelector(".section3").classList.add('sectionss');
}

function goback2() {
document.querySelector(".section2").classList.add('sectionss');
document.querySelector(".section3").classList.add('sectionss');
}

function goback3() {
document.querySelector(".section3").classList.add('sectionss');
}

function plan1(){
   document.querySelector(".plan1").classList.add('planClicked');
   document.querySelector(".plan2").classList.remove('planClicked');
   document.querySelector(".plan3").classList.remove('planClicked');
   document.querySelector(".planTypeSummary").innerHTML = "Arcade"
   document.querySelector(".firstSpan").innerHTML = "$9/mo"
   document.querySelector(".finalprice").innerHTML = "9";
}

function plan2(){
    document.querySelector(".plan2").classList.add('planClicked');
    document.querySelector(".plan1").classList.remove('planClicked');
    document.querySelector(".plan3").classList.remove('planClicked');
    document.querySelector(".planTypeSummary").innerHTML = "Advanced"
    document.querySelector(".firstSpan").innerHTML = "$12/mo"
    document.querySelector(".finalprice").innerHTML = "12";
}

function plan3(){
    document.querySelector(".plan3").classList.add('planClicked');
    document.querySelector(".plan1").classList.remove('planClicked');
    document.querySelector(".plan2").classList.remove('planClicked');
    document.querySelector(".planTypeSummary").innerHTML = "Pro"
    document.querySelector(".firstSpan").innerHTML = "$15/mo"
    document.querySelector(".finalprice").innerHTML = "15";
}

function addPressed1(){
  var addPressed = document.querySelector(".add1");
  addPressed.classList.toggle("planClicked");

  const checkbox1 = document.querySelector(".checkbox1");
  checkbox1.checked ^= 1;

if(checkbox1.checked == true){
  document.querySelector(".addOns1").innerHTML = "Online service"
  document.querySelector(".addprice1").innerHTML = "+$1/mo"
  var totalPrice = document.querySelector(".finalprice").innerHTML;
   var add = parseInt(totalPrice,10) + 1;
  document.querySelector(".finalprice").innerHTML = add;

} else{
  document.querySelector(".addOns1").innerHTML = "No Add-On"
  document.querySelector(".addprice1").innerHTML = "+$0/mo"
  var totalPrice = document.querySelector(".finalprice").innerHTML;
   var add = parseInt(totalPrice,10) - 1;
  document.querySelector(".finalprice").innerHTML = add;
}

}

function addPressed2(){
  var addPressed = document.querySelector(".add2");
  addPressed.classList.toggle("planClicked");

  const checkbox2 = document.querySelector(".checkbox2");
  checkbox2.checked ^= 1;

  if(checkbox2.checked == true){
    document.querySelector(".addOns2").innerHTML = "Larger Storage"
    document.querySelector(".addprice2").innerHTML = "+$2/mo"
    var totalPrice = document.querySelector(".finalprice").innerHTML;
     var add = parseInt(totalPrice,10) + 2;
    document.querySelector(".finalprice").innerHTML = add;
  } else{
    document.querySelector(".addOns2").innerHTML = "No Add-On"
    document.querySelector(".addprice2").innerHTML = "+$0/mo"
    var totalPrice = document.querySelector(".finalprice").innerHTML;
     var add = parseInt(totalPrice,10) - 2;
    document.querySelector(".finalprice").innerHTML = add;
  }
}

function addPressed3(){
  var addPressed = document.querySelector(".add3");
  addPressed.classList.toggle("planClicked");
  const checkbox3 = document.querySelector(".checkbox3");
  checkbox3.checked ^= 1;

  if(checkbox3.checked == true){
    document.querySelector(".addOns3").innerHTML = "Customizable profile"
    document.querySelector(".addprice3").innerHTML = "+$2/mo"
    var totalPrice = document.querySelector(".finalprice").innerHTML;
     var add = parseInt(totalPrice,10) + 2;
    document.querySelector(".finalprice").innerHTML = add;
  } else{
    document.querySelector(".addOns3").innerHTML = "No Add-On"
    document.querySelector(".addprice3").innerHTML = "+$0/mo"
    var totalPrice = document.querySelector(".finalprice").innerHTML;
     var add = parseInt(totalPrice,10) - 2;
    document.querySelector(".finalprice").innerHTML = add;
  }
}
