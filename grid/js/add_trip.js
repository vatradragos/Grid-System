function addTrip(event) {
    var location = prompt("Please enter your new trip location:", " ");
    if (location != null) {
        var date = prompt("Please enter your new trip date in format DD MM YY:", " ");
        document.getElementById("list").innerHTML += "<a href='#' class='tooltip'>" + location + "<span class='tooltiptext'>" + date + "</span></a>";
    } else if (location == null) {
        return false;
    }
}