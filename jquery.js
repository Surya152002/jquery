$(document).ready(function(){
    $('#description').click(function(){
        $('#description').hide(1000);
        $('#description').show(1000);
    })
    $('.logo').mouseenter(function(){
        console.log("You've entered logo 'Money Heist'.")
    })
    $('aside').hover(function(){
        $('aside').fadeIn(2500);
    })
    $('aside').dblclick(function(){
        $('aside').fadeOut(2500);
    })
    $('.s0').mouseenter(function()
    {
        $('.s0').animate({height: '50px'})
    })
    $('.s0').mouseleave(function()
    {
        $('.s0').animate({height: '15px'})
    })
    $('#fname').keypress(function(){
        $('#boxTEXT').toggle(1000);
    })
    $(".imglink").mouseup(function(){
        $("#boxTEXT").slideUp(1500);
    });
    $(".active").dblclick(function(){
        $("#boxTEXT").slideToggle(1500);
    });
})
