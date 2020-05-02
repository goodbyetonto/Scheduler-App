$(document).ready(function () {
    // Create variable to save the value of the class .btn
    const saveBtn = $(".btn");

    // Create variable to save the value of the class .form-control
    var idArray = [];

    // Create global variable to save the current whole hour value, from 0 - 23
    let currentHour = parseInt(moment().hours());

    // Define function for clearing local storage
    function clearLocal() {
        var currentHour = parseInt(moment().hours());
        if (currentHour > 18) {
            localStorage.clear();
        };
    };

    // Define function that creates an array of integer values of each of the id attributes, of each hour block
    // This array will be referenced extensively throughout the app and stores its results in the idArray variable
    /// Defined above
    function createArray () {
        $('.form-control').each(function () {
            idArray.push(parseInt(this.id));
        });
    };
    
    // Define function to affect styling of both past/present hour blocks
    function pastPres(idArray, currentHour) {

        // Create new array from 0 to currentHour (exlusive)
        var past = idArray.slice(0, idArray.indexOf(currentHour));

        // for each 'hour' in array, change the class for each .0 through .23 classes peretaining to the hour divs
        for (hour of past) {

            // change the opacity of the hour divs to make it clear that they are hours that have already past
            $(`.${hour}`).css("opacity", ".2");

            // change the read/write status to read only of the same divs, to keep users from updating the contents of the <input> elements
            $(`#${hour}`).attr("readonly", true);

            // change the active status of the button for the identified hour block to inactive
            $(`#${hour} button`).attr("disabled", true); 
        };
    };

    // Define function to affect styling of future hour blocks
    function future(idArray, currentHour) {

        // Create new array from 0 to currentHour (exlusive)
        var future = idArray.slice(idArray.indexOf(currentHour + 1));

        // for each 'hour' in array, change the class for each .0 through .23 classes peretaining to the hour divs
        for (hour of future) {

            // add the class of '.future' to the hour block divs that are those hours beyond the present
            $(`.${hour}`).attr("class", "future");
        };
    };

    // Define timer function
    function timer() {

        // Set Interval function to update the moment.js call every second, to give the appearance of a clock
        setInterval(function () {
            $(".date-time").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
    };

    // Function Calls
    timer();
    clearLocal();
    createArray();
    pastPres(idArray, currentHour);
    future(idArray, currentHour);

    // Get each ToDo item from local storage and place back in respective form fields with class .form-control
    for (i of idArray) {
        var currentID = $(`#${i}`);
        var refill = localStorage.getItem(`ToDo ${i}`);
        currentID.val(refill);
    };

    // When any of the html buttons with class of .btn are clicked
    saveBtn.on("click", function (event) {

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






