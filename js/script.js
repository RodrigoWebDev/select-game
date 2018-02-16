let button = document.getElementsByClassName("button");
let div = document.getElementsByClassName("col-md-6");

div[0].onmouseover = function() {
    button[0].style.display = "block";
}
div[0].onmouseout = function() {
    button[0].style.display = "none";
}
div[0].onclick = function() {
    window.open('https://en.bandainamcoent.eu/dark-souls/', '_blank');
}

div[1].onmouseover = function() {
    button[1].style.display = "block";
}
div[1].onmouseout = function() {
    button[1].style.display = "none";
}
div[1].onclick = function() {
    window.open('https://www.dragonage.com/en_US/home', '_blank');
}
