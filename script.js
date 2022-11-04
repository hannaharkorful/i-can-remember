console.log("bread,butter,milk");

function createLetter()
{
var intI = 0;
var LargeText = "";
var intValue = 0;
for (intI = 0 ; intI < 5000 ; intI++){

var r= Math.round(Math.random() * 7);
if(r==1){   
var a= 10+Math.round(Math.random() * 12000);
  LargeText += ('&#'+a);
}
else if(r==2){
var a= 9600+Math.round(Math.random() * 32);
  LargeText += ('&#'+a);
}
else if(r==3){
var a= 9600+Math.round(Math.random() * 32);
  LargeText += ('&#'+a);
}
else if(r==4){
var a= 9600+Math.round(Math.random() * 32);
  LargeText += ('&#'+a);
}
else if(r==5){
var a= 768+Math.round(Math.random() * (879-768));
  var Backgs = new Array()

Backgs[0] = '&#'+a+'&# '+a;
Backgs[1] = '&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[2] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[3] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[4] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[5] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[6] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;Backgs[7] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[8] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;

var Q = Backgs.length;


var randValue = Math.floor(Math.random()*Backgs.length);
var b = Backgs[randValue];

  LargeText +=(b);
}
else if(r==6){
var a= 33+Math.round(Math.random() * (93));
  LargeText +=('&#'+a);
}
else{
var a= 32;
  LargeText += String.fromCharCode(a);
  }
}
return LargeText 
  }
  
  var content = createLetter();

function twDisplayTW() {twDisplay('tw',content,0);}
loaded('tw',twDisplayTW);

var resetTime = 0;

function twDisplay(id,content,num) {

var delay = 1; 
if (num <= content.length)  {

var lt = content.substr(0,num); 
document.getElementById(id).innerHTML = lt; 
num++; 
if (num > content.length) delay = resetTime * 1;}
else {document.getElementById(id).innerHTML = ''; num = 0;} 


if (delay > 0) setTimeout('twDisplay("'+id+'","'+content+'","'+num+'")',delay);} 

var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; 
function loaded(i,f) {
if (document.getElementById && document.getElementById(i) != null) f(); 
else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',1);}