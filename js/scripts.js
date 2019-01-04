//LIGHTBOX
lightbox.option({
    'fitImagesInVieport': true,
    'disableScrolling': true,
    'positionFromTop': 100
})

//SEARCH BAR
// jQuery Method
// Listen for user input on search bar
$('#image-search').on('keyup', function () {
    const $Search = $('#image-search').val().toLowerCase();

    // Loop through images
    $('.wrapper img').each(function (i, image) {
        const $caption = $(image).attr('alt').toLowerCase();

        //Show Matches
        if ($caption.includes($Search)) {
            $(image).show()
        } else {
            $(image).hide()
        }
    });
});

//JavaScript Method
// const input = document.getElementById('image-search');

// function myFunction() {
//     let filter = input.value.toLowerCase();
//     let images = document.getElementsByClassName('thumb');

//     // Loop through all list items, and hide those who don't match the search query
//     for (let i = 0; i < images.length; i += 1) {
//         let getInfo = images[i].getElementsByTagName('a')[0];
//         if (getInfo.innerHTML.toLowerCase().indexOf(filter) > -1) {
//             images[i].style.display = '';
//         } else {
//             images[i].style.display = 'none';
//         }
//     }
// }
// //Call the function by listening the Event when Keyup
// input.addEventListener('keyup', myFunction);
