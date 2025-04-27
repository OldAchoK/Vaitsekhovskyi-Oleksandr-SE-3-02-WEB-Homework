function timer() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"];
    let now = new Date();
    document.getElementsByClassName("date")[0].innerHTML = dayNames[now.getDay()] + ", " 
        + monthNames[now.getMonth()] + " " + now.getDate() + ", " + (1900 + now.getYear()) 
        + "  &nbsp; &nbsp; " + now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    setTimeout("timer()", 2000);
}