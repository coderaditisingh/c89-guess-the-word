var score = 0 ;

function updatescore()
{
    score += 1;
    document.getElementById("score").innerHTML="score = "+ score;
}

function savescore()
{
    localStorage.setItem("score",score);
}



function next_page()
{
    window.location="activity_2.html"
}