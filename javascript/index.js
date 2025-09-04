document.getElementById("the_week").addEventListener("submit", function(event){
    event.preventDefault();

    let week = document.getElementById("week");
    let result = document.getElementById("result");

    switch(week.value){
        case "monday":
            result.innerHTML = "Monday is the first day of the week.";
            break;
        case "tuesday":
            result.innerHTML = "Tuesday is the second day of the week.";
            break;
        case "wednesday":
            result.innerHTML = "Wednesday is the third day of the week.";
            break;
        case "thursday":
            result.innerHTML = "Thursday is the fourth day of the week.";
            break;
        case "friday":
            result.innerHTML = "Friday is the fifth day of the week.";
            break;
        case "saturday":
            result.innerHTML = "Saturday is the sixth day of the week.";
            break;
        case "sunday":
            result.innerHTML = "Sunday is the seventh day of the week.";
            break;
        default:
            result.innerHTML = "Please enter a valid day of the week.";
            break;
    }
})