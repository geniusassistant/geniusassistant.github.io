$("#scroll").click(function() {
    var divPosition = $('.collapsible-header').offset();
    $('html, body').animate({
        scrollTop: divPosition.top
    }, 3000);
    window.setTimeout(partB,2500);
});

function partB(){
  $('.collapsible').collapsible('open', 0);
}