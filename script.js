$(document).ready(function() {
   timer(); 
    });

function timer() {
    setInterval(function() {
        $(".date-time").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
        time--; 
    }, 1000); 
}