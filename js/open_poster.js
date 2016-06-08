//繪出海報過程
function open_poster(){
    $(".content").hide();
    $("#work_poster").fadeIn(1000);

    for (pi=1;pi<=6;pi++){
        var draw_poster = '<a href="https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi' + pi + '.jpg" class="img-thumbnail fancybox-thumb" rel="fancybox-thumb"><img src="img/works/pi' + pi + '.jpg"></a>'
        $("#club_poster_display").append(draw_poster).hide().show("clip",1000);
    }

    for (ai=1;ai<=14;ai++){
        var draw_poster = '<a href="https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai' + ai + '.jpg" class="img-thumbnail fancybox-thumb" rel="fancybox-thumb"><img src="img/works/ai' + ai + '.jpg"></a>'
        $("#club_poster_display").append(draw_poster).hide().show("clip",1000);
    }

    for (ca=1;ca<=2;ca++){
        var draw_poster = '<a href="https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case' + ca + '.jpg" class="img-thumbnail fancybox-thumb" rel="fancybox-thumb"><img src="img/works/case' + ca + '.jpg"></a>'
        $("#case_poster_display").append(draw_poster).hide().show("clip",1000);
    }

    $(".fancybox-thumb").fancybox({prevEffect:'none',nextEffect:'none',helpers:{title:{type:'outside'},thumbs:{width:50,height:50}}});
}
