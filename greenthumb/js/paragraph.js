$(document).ready(function(){
    $(".txt").mouseover(function(){
        $(".txt").css("background-color", "green");
    });
    $(".txt").mouseout(function(){
        $(".txt").css("background-color", "yellow");
    });
});