var blue = document.querySelector('#blue')
var green = document.querySelector('#green')
var red = document.querySelector('#red')
var blueparagraph = document.querySelector('.blue')
var greenparagraph = document.querySelector('.green')
var redparagraph = document.querySelector('.red')

// when the #blue tab is clicked,
blue.addEventListener('click', function(evt) {
// show the content for the blue page.
// red and green show none and blue shows block
blueparagraph.classList.toggle('show');
greenparagraph.classList.toggle('hide');
redparagraph.classList.toggle('hide');
});



// when the #red tab is clicked,
red.addEventListener('click', function(evt) {
// show the content for the blue page.
// red and green show none and blue shows block
redparagraph.classList.toggle('show');
greenparagraph.classList.toggle('hide');
blueparagraph.classList.toggle('hide');
});


// when the #green tab is clicked,
green.addEventListener('click', function(evt) {
// show the content for the blue page.
// red and green show none and blue shows block
greenparagraph.classList.toggle('show');
blueparagraph.classList.toggle('hide');
redparagraph.classList.toggle('hide');
});


// when the #green tab is clicked show the content for the green page
//
// when the #red tab is clicked show the content for the red page
