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

function commit() {
  alert('hi')
    $.getJSON('https://api.github.com/repos/geniusassistant/assistantcore/git/refs/heads/master', function(data) {
        $.getJSON(data.object.url, function(data) {
            $('#commit').html(data.message)
            $('#commitauthor').html('- ' + data.author.name)
        });
    });
}

commit()