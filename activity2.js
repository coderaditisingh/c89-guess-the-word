function back()
{
    window.location="activity_1.html";
}

function getscore()
{
    var sr =localStorage.getItem("score");
    document.getElementById("display_score").innerHTML="<h2> score ="+sr+"</h2>"; 
}