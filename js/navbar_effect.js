//dropdown slide 效果
$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
});

//手機版nav選單點擊隱藏
$(document).on('click','.navbar-collapse.in',function(e) {
    $(this).collapse('hide');
});
