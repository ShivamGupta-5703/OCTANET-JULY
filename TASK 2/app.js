$('#inp').keypress(function(e){
    if(e.which === 13){
    const todoText = $('#inp').val();
    const selectedDate = $('#date-inp').val();
    const formattedDate = formatDate(selectedDate);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const selectedDateTime = new Date(selectedDate);

    if(selectedDateTime.getDate() === tomorrow.getDate()){
        const listItem = `<li style="background-color: red;"><span><i class="fa-solid fa-trash"></i></span> ${todoText} <span class="date">${formattedDate}</span><span><i class="fa-sharp fa-solid fa-triangle-exclamation" id="right"></i></span></li>`;
        const existingItems = $('#list').html();
        $('#list').html(listItem + existingItems);
    }
    else{
        $('#list').append(`<li><span><i class="fa-solid fa-trash"></i></span> ${todoText} <span class="date">${formattedDate}</span></li>`);
    }

    $('#inp').val('');
    $('#date-inp').val('');

}});


function formatDate(date) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const parts = date.split('-');
    const formattedDate = new Date(parts[0], parts[1] - 1, parts[2]).toLocaleDateString(undefined, options);
    return formattedDate;
}


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
    $('date-inp').fadeToggle();
    $(this).find('i').toggleClass('fa-angle-up fa-chevron-down');

    setTimeout(function() {
        $('#arrow i').css('transition', 'all 0.3 ease');
    }, 10);

})
