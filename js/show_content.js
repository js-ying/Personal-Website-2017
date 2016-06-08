//秀出各種頁面的內容和其方法、速度
function show_content(num){
    $(".content").hide();
    $("#club_poster_display").html("");
    $("#case_poster_display").html("");

    switch (num) {
        case 0:
            $("#main").fadeIn(1500);
        break;
        case 1:
            $("#blog").show("drop",600);
        break;
        case 2:
            $("#hsinchu").show("drop",600);
        break;
        case 3:
            $("#fish").show("drop",600);
        break;
        case 4:
            $("#2Ddesign").show("drop",600);
        break;
        case 5:
            $("#contact").show("drop",600);
        break;
        case 6:
            $("#about_me").fadeIn(1000);
        break;
        case 7:
            $("#about_web").fadeIn(1000);
            $("#about_web .about_panel").hide().show("clip",1500);
        break;
    }
}
