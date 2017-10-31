//basics of jquery
function main() {

//changes id google in section above to say google instead of website 2
//document.getElementById('google').innerHTML="Google";
//can re-write the line above to simplify the code like this:
$('#google').html("Gooooogle");
//use selector # for ID - same as in CSS

// define a variable links - of the last 2 (my-link class from html)
//let links = document.getElementsByClassName('my-Link')
//re-written line from above:
let links = $('.my-link');

//of the my-link class (a) elements, the first one will be changed to twitter (the third link)
links[0].innerHTML = "Twitter";
links[0].href = "http://www.twitter.com";
//the index 1, so the second of my-link class, the 4th link will be changed to TBD
links[1].innerHTML = "TBD";
links[1].href = "#";
//Used a placeholder

//hide ans show main text
$('#main-text').hide();
$('#main-text').fadeIn(5000);

//hide projects
$('.projects').hide();

//button click
$('.my-buttons').click(function() {

  $(this).next().slideToggle(500);
  })
};

$(document).ready(main);
