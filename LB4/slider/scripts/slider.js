//document.getElementsByClassName("col1")[0].innerHTML="<h2>News &amp; Events</h2>";
const slidesList = [
    "./img/1.webp",
    "./img/2.webp",
    "./img/3.jpg",
    "./img/4.webp",
];

    for(item in slidesList)
    {
        document.getElementsByClassName("slide")[0].innerHTML += `<img class="img_slide" style="opacity: 0; width:40vw; position: absolute; margin-left:30vw;" src="${slidesList[item]}"/>`;
    }

let slideNumber = 0;

document.getElementsByClassName("img_slide")[0].style.opacity = "1";

function slidePrev() {
    if(slideNumber==0)
    {
        document.getElementsByClassName("img_slide")[0].style.opacity = "0";
        slideNumber = slidesList.length - 1;
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "1";
    }
    else
    {
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "0";
        slideNumber = slideNumber - 1;
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "1";
    }
    

}

function slideNext() {
    if(slideNumber==0)
    {
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "0";
        slideNumber = (slideNumber + 1) % slidesList.length;
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "1";
    }
    else
    {
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "0";
        slideNumber = (slideNumber + 1) % slidesList.length;
        document.getElementsByClassName("img_slide")[slideNumber].style.opacity = "1";
    }
}