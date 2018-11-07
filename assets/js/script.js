// function openNav() {
//     document.getElementById("mySidebar").style.width = "60%";
//     document.getElementById("mySidebar").style.display = "block";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.display = "none";
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("gototop-btn").style.display = "block";
    } else {
        document.getElementById("gototop-btn").style.display = "none";
    }
}