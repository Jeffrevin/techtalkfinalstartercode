// JavaScript File
// JavaScript File
$( document ).ready(function() {
    $("#joke").click(function() {
        alert("Knock! Knock! Who's there? Wanda. Wanda who? Wanda hang out with me right now?");
    });
    $("#submit").click(function() {
        var guess = $("#enterField").val();
        if(guess === "1999") {
            alert("You got it!");
        }
        else if (guess < "1999"){
            alert("Too low!");
        }
        else if (guess > "1999"){
            alert("Too high!");
        }
    });
});