$(document).ready(function(){
    $('INPUT#btn_translate').click(translate);
    $('INPUT#language_code').focus(function () {
        $(this).keydown(function (e) {
            if (e.keycode === 13) {
                translate();
            }
        });
    });
});

function translate () {
    const url ='https://www.fourtonfish.com/hellosalut/?';
    $.get(url + $.param({ lang: $('INPUT#language_code').val () }),function (date){
        $('DIV#hello').html(date.hello);
    });
}