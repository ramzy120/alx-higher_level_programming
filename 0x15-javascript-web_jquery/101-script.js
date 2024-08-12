$(document).ready(function(){
    $('DIV#add-item').click(function (){
        $('UL.my_list').append('<li>Item</li>');
    });
    $('DIV#remove-item').click(function (){
        $('UL.my_list li:last').remove();
    });
    $('DIV#clear_list').click(function (){
        $('UL.my_list').empy();
    });

});