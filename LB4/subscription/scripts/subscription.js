const button = document.getElementsByClassName("subscribe")[0];

const timeFrame = [
    document.getElementsByClassName("day")[0],
    document.getElementsByClassName("hour")[0],
    document.getElementsByClassName("minute")[0],
    document.getElementsByClassName("second")[0],
];

const time = Math.random() * 5 + 1;

const timeOfExpire = new Date(Date.now() + time*60000);

let subscription = false;

function timer() {
    if(timeRemaining > 0) {
    let timeRemaining = new Date(timeOfExpire - Date.now());
        if(Math.floor((timeRemaining/36000000)/24)) {
        timeFrame[0].innerText = Math.floor((timeRemaining/3600000)/24) + "d";
        }
        else {
            timeFrame[0].innerText = 0 + "d";
        }
        timeFrame[1].innerText = Math.floor(timeRemaining/3600000) + "h";
        timeFrame[2].innerText = Math.floor(timeRemaining/60000) + "m";
        timeFrame[3].innerText = Math.floor(timeRemaining/1000)%60 + "s";
        timeRemaining -= 1000;
        setTimeout("timer()", 1000);
    }
    timeout();   
}

function timeout() {
    if(subscription) {
        alert("Nice job, but you got no subscription now...");
        button.remove();
    }
    else {
        alert("No subscription - no candy");
        button.remove();
    }
}

function subscribe() {
    alert("Good job! You have subscribed! Now your subscription lasts for a " + (timeOfExpire-Date.now()) * 1000 + "seconds");
    subscription = true;
    button.disabled = true;
}