x=localStorage.getItem("player1_name");
x_score=0;

y=localStorage.getItem("player2_name");
y_score=0;

document.getElementById("player_1_name").innerHTML = x + " : ";
document.getElementById("p1_score").innerHTML=x_score;

document.getElementById("player_2_name").innerHTML = y + " : ";
document.getElementById("p2_score").innerHTML=y_score;

document.getElementById("player_question").innerHTML="Question turn : " + x ;
document.getElementById("player_answer").innerHTML="answer turn : " + y ;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case"+ word);

    first=word.charAt(1);
    console.log(first);

    LD=Math.floor(word.length/2);

    snd=word.charAt(LD);
    console.log(snd);

    lm=word.length-1;
    trd=word.charAt(lm);
    console.log(trd);

    Remove_first=word.replace(first," _ ");
    Remove_snd=Remove_first.replace(snd," _ ");
    Remove_trd=Remove_snd.replace(trd," _ ");
    console.log(Remove_trd);

    qw="<h4 id='word_display'> Q. " +Remove_trd+ "</h4>";
    ib="<br> answer : <input type='text' id='icb'>";
    cb='<br><br><button class="btn btn-info" onclick="check()">Check</button>';
    row=qw+ib+cb;
    document.getElementById("output").innerHTML=row;
}