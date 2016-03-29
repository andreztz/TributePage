$(document).ready(function() {

    var getData = function(data) {
        var title = '';
        var quote_en = 'If you have time, you should read more about this amazing musician be in your ';
        var quote_pt = 'Se você tiver tempo, você deve ler mais sobre esta incrível músico estar em seu ';
        var readMore = 'Wikipedia entry.';

        var text = data['query']['pages']['297412']['extract'];
        $('#text-intro').html(
            '<p class="text-justify">'+ text + '</p>' +
            quote_en +
            '<a href="https://pt.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Jobim">'+ readMore +'</a>'
            );
    };
    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Ant%C3%B4nio_Carlos_Jobim';

    $.ajax({
        dataType: "jsonp",
        url: url,
    })
    .done(function(data) {
        // do my stuff
        console.log(data);
        console.log(data['query']['pages']['297412']['extract']);
        getData(data);
    });

    // MENUS
    var body = $("body");
    var pos = body.scrollTop() // Get position of the body
    console.log(pos);

    $("a[href$='#']").click(function() {
        /* Act on the event */
        $('html, body').animate({scrollTop: 0 }, 'slow') //'slow'
    });

    $("a[href$='#about']").click(function() {
        //$('html, body').animate({ scrollTop: 0 }, 'fast');
        //scrollTop: $(window).scrollTop() + 310

        $('html, body').animate({scrollTop: 310}, 'slow')
    });

    $("a[href$='#discog']").click(function() {
        $('html, body').animate({ scrollTop: 550}, 'slow')
        //$('html, body').animate({scrollTop: $(window).scrollTop() + 625});

    });

    $("a[href$='#top']").click(function() {
        //$('html,body').scrollTop(0);
        $('html, body').animate({scrollTop: 0 }, 'slow');
    });

});
