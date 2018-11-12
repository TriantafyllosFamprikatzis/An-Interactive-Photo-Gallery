//Lightbox
lightbox.option({
'fitImagesInVieport':true,
 'maxHeight': 800,
 'maxWidth': 1000,
 'positionFromTop':200,
 'alwaysShowNavOnTouchDevices':true
})


//Search bar
/*
var input = document.getElementById("image-search")[0];

function userInput() {
    // Declare variables
    var filter, a, getInfo, i;
        filter = input.value.toLowerCase();
        a = document.getElementsByClassName("javaS");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < a.length; i++) {
        getInfo = a[i].getAttribute('data-title');
        if (getInfo.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

input.addEventListener("keyup", userInput);
*/

const input = document.getElementById('image-search');

function myFunction() {
    // Declare variables
    let filter, li, a, i;
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName('thumb');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
input.addEventListener("keyup", myFunction);