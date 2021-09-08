var n = 0;
l=document.getElementById("rb_catp").onclick;
function f(){
n=n+1;
gh=document.getElementById("tx_us_1").value;
hh=document.getElementById("tx_us_2").value;
}
function a(){
if((n>0)&&(l=true)){
window.location.href=('real.html');
localStorage.setItem("Usern1",gh);
localStorage.setItem("Usern2",hh);
}
else{
window.alert("Please click on the button.")
}
}