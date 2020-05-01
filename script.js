$(document).ready(function () {
    // Create variable to save the value of the class .btn
    const saveBtn = $(".btn");

    // Create variable to save the value of the class .form-control
    var idArray = []; 

    function clearLocal() {
        var currentHour = parseInt(moment().hours());
        if (currentHour > 18) {
            localStorage.clear(); 
        };
    };

    createArray = function() {
        $('.form-control').each(function () {
            idArray.push(parseInt(this.id));
        });
    }; 

    function pastPres(idArray) {
        // Create variable to hold the hour value (6 - 18) of the current time, as an integer
        var currentHour = parseInt(moment().hours());
        console.log(currentHour); 

        // Create new array from 0 to currentHour (exlusive)
        var past = idArray.slice(0, idArray.indexOf(currentHour));
        console.log(past); 

        // for each 'hour' in array, change the class for each .0 through .23 classes peretaining to the hour divs
        for (hour of past) {

            // change the opacity of the hour divs to make it clear that they are hours that have already past
            $(`.${hour}`).css("opacity", ".5");

            // change the read/write status to read only of the same divs, to keep users from updating the contents of the <input> elements
            $(`#${hour}`).attr("readonly", true); 
        };
    };

    // Define timer function
    function timer() {

        // Set Interval function to update the moment.js call every second, to give the appearance of a clock
        setInterval(function () {
            $(".date-time").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
    };

    // Call Timer function
    timer();
    clearLocal(); 
    createArray(); 
    console.log(idArray); 
    pastPres(idArray);

    // Get each ToDo item from local storage and place back in respective form fields with class .form-control
    for (i of idArray) {
        var currentID = $(`#${i}`);
        var refill = localStorage.getItem(`ToDo ${i}`);
        currentID.val(refill);
    };

    // Create variable to hold the hour value (0 - 23) of the current time, as an integer
    var currentHour = parseInt(moment().hours());

    // When any of the html buttons with class of .btn are clicked
    saveBtn.on("click", function () {

        // Prevent default behavior after click so as not to clear the form text
        event.preventDefault();

        // Loop through each div element with the class txtField
        for (i of idArray) {

            // Define local variable currentID to hold the value #i which is 0 - 23 for the text field div id's
            var currentID = $(`#${i}`);

            // Store in local memory the text that is input into the txtField div
            localStorage.setItem(`ToDo ${i}`, currentID.val());
        };
    });
});






