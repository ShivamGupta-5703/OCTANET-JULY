$('#inp').keypress(function(e){
    if(e.which === 13){
        const todoText = $('#inp').val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash"></i></span> ${todoText}</li>`);
        $('#inp').val("");
    }
})

$('ul').on('click','li',function(){
    $(this).toggleClass('Completed')
})

$('#list').on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });

    e.stopPropagation(); 
})

$('#arrow').click(function(){
    $('#inp').fadeToggle();
    $(this).find('i').toggleClass('fa-angle-up fa-chevron-down');

    setTimeout(function() {
        $('#arrow i').css('transition', 'all 0.3 ease');
    }, 10);

})
