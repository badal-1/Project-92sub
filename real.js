player1_name = localStorage.getItem("Usern1");
player2_name = localStorage.getItem("Usern2");
player1_score = 0; 
player2_score = 0; 
document.getElementById("player1_name").innerHTML = player1_name + " : "; 
document.getElementById("player2_name").innerHTML = player2_name + " : "; 
document.getElementById("player1_score").innerHTML = player1_score ; 
document.getElementById("player2_score").innerHTML = player2_score ; 
document.getElementById("Player_who_has_to_Question_the_other_player_name").innerHTML = player1_name;
document.getElementById("Player_who_has_to_Answer_the_other_player_name").innerHTML = player2_name;
function send(){
n1=document.getElementById("n1").value;
n2=document.getElementById("n2").value;
ac=parseInt(n1)*parseInt(n2);
q_n="<h4>" + n1 + "X" + n2 + "</h4>";
i="<br>Answer : <input id='answer_input' type='number' style='width:200px' class='form-control'>";
c="<br><br> <button id='check_button' class='btn btn-success' onclick='check();'>Check your answer</button>"
row = q_n+i+c;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}
qt="player1";
at="player2";
function check(){
g_a=document.getElementById("answer_input").value;
if(g_a == ac){
if (at == "player1"){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=player2_score;
}
}
if (qt == "player1"){
qt = "player2"
document.getElementById("Player_who_has_to_Question_the_other_player_name").innerHTML = player2_name;
}
else{
qt = "player1"
document.getElementById("Player_who_has_to_Question_the_other_player_name").innerHTML =player1_name;
}
if (at == "player2"){
    at = "player1"
    document.getElementById("Player_who_has_to_Answer_the_other_player_name").innerHTML = player1_name;
    }
    else{
    at = "player2"
    document.getElementById("Player_who_has_to_Answer_the_other_player_name").innerHTML =player2_name;
    }
}
