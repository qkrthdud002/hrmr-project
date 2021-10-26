$(()=>{
    $('#start').on('click', ()=>{
        const target = $('#target_time').val();
        $('#time').text(target);
    });
});